# Hairven Beauty Tax Provider

A custom tax provider module for Hairven Beauty that implements specialized tax calculation logic for beauty and hair care products.

## Features

- **Beauty Product Discounts**: Automatic tax discounts for hair care products
- **Premium Product Handling**: Special rates for high-value beauty items
- **Regional Tax Support**: Supports multiple countries (ZA, US, GB, CA)
- **Essential Item Exemptions**: VAT exemptions for essential beauty items in South Africa
- **Configurable Rates**: Customizable discount and markup rates

## Configuration

The tax provider is configured in `medusa-config.js` with feature toggles:

```javascript
{
  resolve: "./src/modules/hairven-tax",
  id: "hairven-tax",
  options: {
    // Feature toggles - set to false to disable, true to enable
    enableProductSpecificTax: false,    // Enable/disable product-specific tax logic
    enableBeautyDiscounts: false,       // Enable/disable beauty product discounts/markups
    enableVATExemptions: false,         // Enable/disable VAT exemptions for essential items
    enableShippingTaxModifications: false, // Enable/disable shipping tax modifications

    // Configuration values (only used if respective features are enabled)
    hairCareDiscountRate: 0.1,          // 10% discount for hair care products
    cosmeticsMarkupRate: 0.1,           // 10% markup for cosmetics
    freeShippingThreshold: 100000,      // $1000 in cents - free shipping tax threshold
  },
}
```

### Configuration Options

| Option                           | Type    | Default  | Description                                         |
| -------------------------------- | ------- | -------- | --------------------------------------------------- |
| `enableProductSpecificTax`       | boolean | `false`  | Master toggle for all product-specific tax logic    |
| `enableBeautyDiscounts`          | boolean | `false`  | Enable discounts/markups for beauty products        |
| `enableVATExemptions`            | boolean | `false`  | Enable VAT exemptions for essential items (ZA only) |
| `enableShippingTaxModifications` | boolean | `false`  | Enable shipping tax modifications                   |
| `hairCareDiscountRate`           | number  | `0.1`    | Discount rate for hair care products (10%)          |
| `cosmeticsMarkupRate`            | number  | `0.1`    | Markup rate for cosmetics (10%)                     |
| `freeShippingThreshold`          | number  | `100000` | Order total for free shipping tax ($1000 in cents)  |

## Tax Logic

### Item Tax Calculation

- **Hair Care Products**: 10% tax discount (configurable)
- **Cosmetics**: 10% tax markup (configurable)
- **Premium Items** (>$500): 5% tax discount
- **Essential Items** (ZA): VAT exempt for sunscreen, moisturizer, cleanser

### Shipping Tax Calculation

- **Free Shipping Tax**: No shipping tax for orders over $1000
- **Standard Rate**: Applies base rate for smaller orders

## Setup

1. **Initialize Tax Regions and Rates**:

   ```bash
   POST /admin/tax/setup
   ```

2. **The setup creates**:
   - Tax regions for ZA, US, GB, CA
   - Appropriate tax rates for each region
   - VAT rates for South Africa (15% standard, 0% zero rate)
   - Sales tax for US (8.5%)
   - VAT for UK (20%)
   - GST/HST for Canada (5%/13%)

## API Endpoints

- `GET /admin/tax/setup` - View setup information
- `POST /admin/tax/setup` - Initialize tax configuration

## Supported Countries

- **South Africa (ZA)**: 15% VAT, 0% for essential items
- **United States (US)**: 8.5% Sales Tax
- **United Kingdom (GB)**: 20% VAT
- **Canada (CA)**: 5% GST, 13% HST

## Development

The tax provider implements the `ITaxProvider` interface and provides:

- Custom rate calculations based on product type
- Regional tax handling
- Configurable business rules
- Rollback support for workflows
