import { LocalizedLink } from "@/components/LocalizedLink"
import HairvenLogoAlt from "@/components/icons/HairvenLogoAlt"

const HairvenLogoAltComponent = () => {
  return (
    <LocalizedLink
      href="/"
      className="flex items-center h-full"
      data-testid="nav-store-link"
    >
      <HairvenLogoAlt size={240} />
    </LocalizedLink>
  )
}

export default HairvenLogoAltComponent
