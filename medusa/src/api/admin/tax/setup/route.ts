import type {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import { setupHairvenTaxWorkflow } from "../../../../workflows/setup-hairven-tax"

export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
) {
  try {
    const { result } = await setupHairvenTaxWorkflow(req.scope)
      .run()

    res.json({
      success: true,
      message: "Hairven Beauty tax setup completed successfully",
      data: result
    })
  } catch (error) {
    console.error("Error setting up Hairven tax:", error)
    res.status(500).json({
      success: false,
      message: "Failed to setup tax configuration",
      error: error.message
    })
  }
}

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
) {
  res.json({
    message: "Hairven Beauty Tax Setup Endpoint",
    description: "POST to this endpoint to initialize tax regions and rates for Hairven Beauty",
    usage: "POST /admin/tax/setup"
  })
}
