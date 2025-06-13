import { 
  createWorkflow, 
  WorkflowResponse,
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { Modules } from "@medusajs/framework/utils"

const createTaxRegionsStep = createStep(
  "create-hairven-tax-regions",
  async ({}, { container }) => {
    const taxModuleService = container.resolve(Modules.TAX)

    // Create tax regions for South Africa and other countries
    const taxRegions = await taxModuleService.createTaxRegions([
      {
        country_code: "za", // South Africa
      },
      {
        country_code: "us", // United States
      },
      {
        country_code: "gb", // United Kingdom
      },
      {
        country_code: "ca", // Canada
      },
    ])

    return new StepResponse({ taxRegions }, taxRegions.map(r => r.id))
  },
  async (taxRegionIds, { container }) => {
    if (!taxRegionIds || taxRegionIds.length === 0) {
      return
    }
    const taxModuleService = container.resolve(Modules.TAX)
    await taxModuleService.deleteTaxRegions(taxRegionIds)
  }
)

const createTaxRatesStep = createStep(
  "create-hairven-tax-rates",
  async ({ taxRegions }, { container }) => {
    const taxModuleService = container.resolve(Modules.TAX)

    const taxRates = []

    // Create tax rates for each region
    for (const region of taxRegions) {
      let rates = []
      
      switch (region.country_code) {
        case "za": // South Africa VAT
          rates = [
            {
              tax_region_id: region.id,
              name: "VAT Standard Rate",
              rate: 15, // 15% VAT in South Africa
              code: "VAT_ZA",
            },
            {
              tax_region_id: region.id,
              name: "VAT Zero Rate",
              rate: 0, // 0% for certain beauty products
              code: "VAT_ZA_ZERO",
            },
          ]
          break
        case "us": // United States
          rates = [
            {
              tax_region_id: region.id,
              name: "Sales Tax",
              rate: 8.5, // Average US sales tax
              code: "SALES_US",
            },
          ]
          break
        case "gb": // United Kingdom
          rates = [
            {
              tax_region_id: region.id,
              name: "VAT Standard Rate",
              rate: 20, // 20% VAT in UK
              code: "VAT_GB",
            },
          ]
          break
        case "ca": // Canada
          rates = [
            {
              tax_region_id: region.id,
              name: "GST",
              rate: 5, // 5% GST in Canada
              code: "GST_CA",
            },
            {
              tax_region_id: region.id,
              name: "HST",
              rate: 13, // 13% HST in some provinces
              code: "HST_CA",
            },
          ]
          break
      }

      if (rates.length > 0) {
        const createdRates = await taxModuleService.createTaxRates(rates)
        taxRates.push(...createdRates)
      }
    }

    return new StepResponse({ taxRates }, taxRates.map(r => r.id))
  },
  async (taxRateIds, { container }) => {
    if (!taxRateIds || taxRateIds.length === 0) {
      return
    }
    const taxModuleService = container.resolve(Modules.TAX)
    await taxModuleService.deleteTaxRates(taxRateIds)
  }
)

export const setupHairvenTaxWorkflow = createWorkflow(
  "setup-hairven-tax",
  () => {
    const { taxRegions } = createTaxRegionsStep()
    const { taxRates } = createTaxRatesStep({ taxRegions })

    return new WorkflowResponse({ 
      taxRegions, 
      taxRates,
      message: "Hairven Beauty tax setup completed successfully"
    })
  }
)
