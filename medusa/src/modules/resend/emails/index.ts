import AuthPasswordForgotResetEmail from "./auth-forgot-password"
import AuthPasswordResetEmail from "./auth-password-reset"
import OrderPlacedEmail from "./order-placed"
import WelcomeEmail from "./welcome"
import EftPaymentInstructionsEmail from "./eft-payment-instructions"

// TODO: we should be able to use notification data in subjects too
export const subjects = {
  "auth-password-reset": "Reset your Hairven Beauty password",
  "order-placed": "Your Hairven Beauty order has been placed",
  "customer-welcome": "Welcome to Hairven Beauty!",
  "auth-forgot-password": "Reset your Hairven Beauty password",
  "eft-payment-instructions": "Hairven Beauty - EFT Payment Instructions",
}

export default {
  "auth-password-reset": AuthPasswordResetEmail,
  "order-placed": OrderPlacedEmail,
  "customer-welcome": WelcomeEmail,
  "auth-forgot-password": AuthPasswordForgotResetEmail,
  "eft-payment-instructions": EftPaymentInstructionsEmail,
}
