export interface EftPaymentData extends Record<string, unknown> {
  reference: string
  amount: number
  currency_code: string
  customer_email: string
  order_id?: string
  created_at: Date
}

export interface EftOptions {
  // Future options can be added here
  bankDetails?: {
    accountName: string
    accountNumber: string
    bankName: string
    branchCode: string
  }
}
