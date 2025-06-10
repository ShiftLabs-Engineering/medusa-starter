import AuthPasswordForgotResetEmail from "./auth-forgot-password"
import AuthPasswordResetEmail from "./auth-password-reset"
import OrderPlacedEmail from "./order-placed"
import WelcomeEmail from "./welcome"
import EftPaymentInstructionsEmail from "./eft-payment-instructions"

// TODO: we should be able to use notification data in subjects too
export const subjects = {
  "auth-password-reset": "Reset your password",
  "order-placed": "Your order has been placed",
  "customer-welcome": "Welcome to Sofa Society!",
  "auth-forgot-password": "Reset your password",
  "eft-payment-instructions": "EFT Payment Instructions",
}

export default {
  "auth-password-reset": AuthPasswordResetEmail,
  "order-placed": OrderPlacedEmail,
  "customer-welcome": WelcomeEmail,
  "auth-forgot-password": AuthPasswordForgotResetEmail,
  "eft-payment-instructions": EftPaymentInstructionsEmail,
}
