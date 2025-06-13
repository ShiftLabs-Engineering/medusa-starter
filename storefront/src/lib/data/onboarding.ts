import { sdk } from "@/lib/config"

export const getOnboardingStatus = async () => {
  try {
    const { onboarding_state } = await sdk.admin.store.retrieve()
    return onboarding_state
  } catch (error) {
    console.error("Error fetching onboarding status:", error)
    return null
  }
}
