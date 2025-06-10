import { AbstractPaymentProvider } from "@medusajs/framework/utils"
import { Logger } from "@medusajs/framework/types"
import {
  InitiatePaymentInput,
  InitiatePaymentOutput,
  AuthorizePaymentInput,
  AuthorizePaymentOutput,
  CapturePaymentInput,
  CapturePaymentOutput,
  CancelPaymentInput,
  CancelPaymentOutput,
  DeletePaymentInput,
  DeletePaymentOutput,
  RetrievePaymentInput,
  RetrievePaymentOutput,
  UpdatePaymentInput,
  UpdatePaymentOutput,
  RefundPaymentInput,
  RefundPaymentOutput,
  GetPaymentStatusInput,
  GetPaymentStatusOutput,
  WebhookActionResult,
} from "@medusajs/framework/types"
import { EftOptions, EftPaymentData } from "./types"

type InjectedDependencies = {
  logger: Logger
  notificationModuleService?: any
}

class EftPaymentProviderService extends AbstractPaymentProvider<EftOptions> {
  static identifier = "eft";

  protected logger_: Logger
  protected options_: EftOptions
  protected notificationService_?: any

  constructor(container: InjectedDependencies, options: EftOptions) {
    super(container, options)

    this.logger_ = container.logger
    this.options_ = options
    this.notificationService_ = container.notificationModuleService
  }

  /**
   * Generate a random 8-character alphanumeric reference
   */
  private generatePaymentReference(orderNumber?: string): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let randomPart = ""

    // Generate 4 random characters
    for (let i = 0; i < 4; i++) {
      randomPart += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    // If orderNumber is provided, concatenate it with random characters
    // Otherwise, fall back to the original 8-character random string
    if (orderNumber) {
      return `${orderNumber}-${randomPart}`
    } else {
      return (
        randomPart +
        chars
          .substring(0, 4)
          .split("")
          .sort(() => 0.5 - Math.random())
          .join("")
      )
    }
  }

  async initiatePayment(
    input: InitiatePaymentInput,
  ): Promise<InitiatePaymentOutput> {
    const { amount, currency_code, context } = input

    // Extract order number from context (using display_id which is the order number)
    //const orderNumber = context?.order?.display_id || context?.order?.id;
    const orderNumber = null
    const reference = this.generatePaymentReference(orderNumber)

    const paymentData: EftPaymentData = {
      reference,
      amount: typeof amount === "string" ? parseInt(amount) : Number(amount),
      currency_code,
      customer_email: context?.customer?.email || "",
      created_at: new Date(),
    }

    this.logger_.info(`EFT payment initiated with reference: ${reference}`)

    return {
      id: reference,
      data: paymentData,
    }
  }

  async authorizePayment(
    input: AuthorizePaymentInput,
  ): Promise<AuthorizePaymentOutput> {
    const paymentData = input.data as EftPaymentData

    // Send email with payment instructions
    try {
      await this.sendPaymentInstructions(paymentData, input.context)
      this.logger_.info(
        `EFT payment instructions sent for reference: ${paymentData.reference}`,
      )
    } catch (error) {
      this.logger_.error(`Failed to send EFT payment instructions: ${error}`)
    }

    return {
      data: {
        ...paymentData,
        status: "pending",
      },
      status: "pending",
    }
  }

  async capturePayment(
    input: CapturePaymentInput,
  ): Promise<CapturePaymentOutput> {
    const paymentData = input.data as EftPaymentData

    this.logger_.info(
      `EFT payment captured for reference: ${paymentData.reference}`,
    )

    return {
      data: {
        ...paymentData,
        status: "captured",
      },
    }
  }

  async cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput> {
    const paymentData = input.data as EftPaymentData

    this.logger_.info(
      `EFT payment cancelled for reference: ${paymentData.reference}`,
    )

    return {
      data: {
        ...paymentData,
        status: "cancelled",
      },
    }
  }

  async deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput> {
    const paymentData = input.data as EftPaymentData

    this.logger_.info(
      `EFT payment deleted for reference: ${paymentData.reference}`,
    )

    return {
      data: paymentData,
    }
  }

  async retrievePayment(
    input: RetrievePaymentInput,
  ): Promise<RetrievePaymentOutput> {
    const paymentData = input.data as EftPaymentData

    return {
      data: paymentData,
    }
  }

  async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
    const { amount, currency_code } = input
    const paymentData = input.data as EftPaymentData

    const updatedData: EftPaymentData = {
      ...paymentData,
      amount: amount ? Number(amount) : paymentData.amount,
      currency_code: currency_code || paymentData.currency_code,
    }

    this.logger_.info(
      `EFT payment updated for reference: ${paymentData.reference}`,
    )

    return {
      data: updatedData,
    }
  }

  /**
   * Send payment instructions email to customer
   */
  private async sendPaymentInstructions(
    paymentData: EftPaymentData,
    context: any,
  ): Promise<void> {
    if (!this.notificationService_) {
      this.logger_.warn(
        "Notification service not available, falling back to logging",
      )
      this.logger_.info(
        `EFT Payment Instructions for ${paymentData.customer_email}: Reference: ${paymentData.reference}, Amount: ${paymentData.amount} ${paymentData.currency_code}`,
      )
      return
    }

    if (!paymentData.customer_email) {
      this.logger_.error(
        "Cannot send EFT payment instructions: customer email is missing",
      )
      return
    }

    try {
      // Send email using the notification service
      await this.notificationService_.createNotifications({
        to: paymentData.customer_email,
        channel: "email",
        template: "eft-payment-instructions",
        data: {
          reference: paymentData.reference,
          amount: paymentData.amount,
          currency_code: paymentData.currency_code,
          order: context?.order || {},
          customer: context?.customer || {},
          // Add bank details if configured
          bankDetails: this.options_.bankDetails || null,
        },
      })

      this.logger_.info(
        `EFT payment instructions email sent successfully to: ${paymentData.customer_email}`,
      )
    } catch (error) {
      this.logger_.error(
        "Failed to send EFT payment instructions email:",
        error,
      )
      // Log the payment details as fallback
      this.logger_.info(
        `EFT Payment Instructions (email failed) for ${paymentData.customer_email}: Reference: ${paymentData.reference}, Amount: ${paymentData.amount} ${paymentData.currency_code}`,
      )
    }
  }

  async refundPayment(input: RefundPaymentInput): Promise<RefundPaymentOutput> {
    const paymentData = input.data as EftPaymentData

    this.logger_.info(
      `EFT payment refund processed for reference: ${paymentData.reference}`,
    )

    return {
      data: {
        ...paymentData,
        status: "refunded",
      },
    }
  }

  async getPaymentStatus(
    _input: GetPaymentStatusInput,
  ): Promise<GetPaymentStatusOutput> {
    // For EFT payments, status would typically be checked manually or via bank integration
    // For now, we'll return pending status
    return {
      status: "pending",
    }
  }

  async getWebhookActionAndData(
    _data: Record<string, unknown>,
  ): Promise<WebhookActionResult> {
    // EFT payments typically don't have webhooks since they're manual
    // This method is required but can return a no-op result
    return {
      action: "not_supported",
      data: {
        session_id: "",
        amount: 0,
      },
    }
  }
}

export default EftPaymentProviderService
