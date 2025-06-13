import { ITaxProvider } from "@medusajs/framework/types"
import { TaxTypes } from "@medusajs/framework/types"

export default class HairvenTaxProvider implements ITaxProvider {
  static identifier = "sars-vat"

  constructor(container: any, options: any) {
    // You can access options here and initialize any third-party clients
    this.options = options
  }

  private options: any

  getIdentifier(): string {
    return HairvenTaxProvider.identifier
  }

  async getTaxLines(
    itemLines: TaxTypes.ItemTaxCalculationLine[],
    shippingLines: TaxTypes.ShippingTaxCalculationLine[],
    context: TaxTypes.TaxCalculationContext
  ): Promise<(TaxTypes.ItemTaxLineDTO | TaxTypes.ShippingTaxLineDTO)[]> {
    let taxLines: (TaxTypes.ItemTaxLineDTO | TaxTypes.ShippingTaxLineDTO)[] = []

    // Calculate tax lines for items
    taxLines = itemLines.flatMap((line) => {
      return line.rates.map((rate) => ({
        rate_id: rate.id,
        rate: this.options?.enableProductSpecificTax
          ? this.calculateCustomRate(rate.rate || 0, line, context)
          : rate.rate || 0, // Use standard rate if product-specific tax is disabled
        name: rate.name,
        code: rate.code,
        line_item_id: line.line_item.id,
        provider_id: this.getIdentifier(),
      }))
    })

    // Calculate tax lines for shipping
    taxLines = taxLines.concat(
      shippingLines.flatMap((line) => {
        return line.rates.map((rate) => ({
          rate_id: rate.id,
          rate: this.options?.enableShippingTaxModifications
            ? this.calculateCustomShippingRate(rate.rate || 0, line, context)
            : rate.rate || 0, // Use standard rate if shipping modifications are disabled
          name: rate.name,
          code: rate.code,
          shipping_line_id: line.shipping_line.id,
          provider_id: this.getIdentifier(),
        }))
      })
    )

    return taxLines
  }

  private calculateCustomRate(
    baseRate: number,
    line: TaxTypes.ItemTaxCalculationLine,
    context: TaxTypes.TaxCalculationContext
  ): number {
    // Custom tax calculation logic for Hairven Beauty
    let adjustedRate = baseRate

    // Apply beauty product specific logic (only if enabled)
    if (this.options?.enableBeautyDiscounts) {
      // Hair care products get a discount
      if (line.line_item.product_type === "hair-care") {
        adjustedRate = baseRate * (1 - (this.options.hairCareDiscountRate || 0.1))
      }

      // Cosmetics get a markup
      if (line.line_item.product_type === "cosmetics") {
        adjustedRate = baseRate * (1 + (this.options.cosmeticsMarkupRate || 0.1))
      }

      // Premium beauty products (over $500) get special treatment
      if (line.line_item.unit_price > 50000) { // $500 in cents
        adjustedRate = baseRate * 0.95 // 5% discount for premium items
      }
    }

    // South African specific logic (only if VAT exemptions are enabled)
    if (this.options?.enableVATExemptions && context.address?.country_code === "za") {
      // Essential beauty items (like sunscreen) might be VAT exempt
      const essentialItems = ["sunscreen", "moisturizer", "cleanser"]
      if (essentialItems.some(item =>
        line.line_item.product_name?.toLowerCase().includes(item)
      )) {
        return 0 // VAT exempt
      }
    }

    return Math.max(0, adjustedRate) // Ensure rate is never negative
  }

  private calculateCustomShippingRate(
    baseRate: number,
    line: TaxTypes.ShippingTaxCalculationLine,
    context: TaxTypes.TaxCalculationContext
  ): number {
    // Custom shipping tax calculation (only if free shipping threshold is enabled)
    if (this.options?.freeShippingThreshold && this.options.freeShippingThreshold > 0) {
      const orderTotal = context.allocation_map?.reduce((total, allocation) => {
        return total + (allocation.amount || 0)
      }, 0) || 0

      if (orderTotal > this.options.freeShippingThreshold) {
        return 0 // No shipping tax for large orders
      }
    }

    return baseRate
  }
}
