import { LocalizedLink } from "@/components/LocalizedLink"
import HairvenLogo from "@/components/icons/HairvenLogo"

const HairvenLogoComponent = () => {
  return (
    <LocalizedLink href="/" className="flex items-center h-full">
      <HairvenLogo size={140} />
      <div
        className="txt-compact-xlarge-plus hover:text-ui-fg-base text-center -ml-10"
        data-testid="nav-store-link"
      >
        <span className="text-rose-700">
          Hairven Beauty <br /> Store
        </span>
      </div>
    </LocalizedLink>
  )
}

export default HairvenLogoComponent
