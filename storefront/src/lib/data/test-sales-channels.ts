import { listSalesChannels, getDefaultSalesChannel } from "./sales-channels"

export async function testSalesChannels() {
  console.log("🔍 Testing Sales Channels Configuration...")
  
  try {
    // Test listing all sales channels
    const salesChannels = await listSalesChannels()
    console.log("📋 Available Sales Channels:", salesChannels?.map(sc => ({
      id: sc.id,
      name: sc.name,
      description: sc.description
    })))

    // Test getting default sales channel
    const defaultChannel = await getDefaultSalesChannel()
    console.log("🎯 Default Sales Channel:", defaultChannel ? {
      id: defaultChannel.id,
      name: defaultChannel.name,
      description: defaultChannel.description
    } : "None found")

    return {
      success: true,
      salesChannelsCount: salesChannels?.length || 0,
      defaultChannel: defaultChannel?.id || null
    }
  } catch (error) {
    console.error("❌ Sales Channels Test Failed:", error)
    return {
      success: false,
      error: error.message
    }
  }
}

// You can call this function in your browser console or add it to a page for testing
// testSalesChannels().then(result => console.log("Test Result:", result))
