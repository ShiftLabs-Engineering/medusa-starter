import { sdk } from "@lib/config"

export async function testPublishableKey() {
  console.log("🔑 Testing Publishable Key...")
  
  const publishableKey = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY
  console.log("Key from env:", publishableKey ? `${publishableKey.substring(0, 10)}...` : "❌ Missing")
  
  try {
    // Test a simple store endpoint that requires publishable key
    const response = await sdk.client.fetch("/store/regions", {
      method: "GET",
    })
    
    console.log("✅ Publishable key is valid!")
    console.log("Regions found:", response.regions?.length || 0)
    return { success: true, regions: response.regions?.length || 0 }
    
  } catch (error) {
    console.error("❌ Publishable key test failed:", error)
    
    if (error.message?.includes('Publishable API key required')) {
      console.error("🔑 Key is missing or invalid")
    }
    
    return { success: false, error: error.message }
  }
}

// You can call this in browser console: testPublishableKey()
