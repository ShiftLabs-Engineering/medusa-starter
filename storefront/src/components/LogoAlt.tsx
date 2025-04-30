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
      <div
        className="txt-compact-large-plus hover:text-ui-fg-base text-center -ml-8"
        data-testid="nav-store-link"
      >
        <span className="text-black">
          Hairven Beauty <br /> Store
        </span>
      </div>
    </LocalizedLink>
  )
}

export default HairvenLogoAltComponent
