import HairvenTaxProvider from "./service"
import { 
  ModuleProvider, 
  Modules
} from "@medusajs/framework/utils"

export default ModuleProvider(Modules.TAX, {
  services: [HairvenTaxProvider],
})
