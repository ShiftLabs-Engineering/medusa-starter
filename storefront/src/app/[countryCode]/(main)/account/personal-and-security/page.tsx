// Components
import { Icon } from "@/components/Icon"
import { Button } from "@/components/Button"

export default function AccountPersonalAndSecurityPage() {
  return (
    <div className="max-w-150 w-full mx-auto pt-45 pb-36 px-10">
      <h1 className="text-lg mb-14">Personal & security</h1>
      <h2 className="text-md mb-6">Personal information</h2>
      <div className="w-full border border-grayscale-200 rounded-2xs p-4 flex items-center mb-16">
        <Icon name="user" className="w-6 h-6" />
        <div className="ml-8 mr-16">
          <p className="text-xs text-grayscale-500">Name</p>
          <p className="max-w-50 truncate">Jovana Jerimic</p>
        </div>
        <div className="mr-4">
          <p className="text-xs text-grayscale-500">Number</p>
          <p>-</p>
        </div>
        <Button variant="outline" className="h-auto self-stretch ml-auto">
          Change
        </Button>
      </div>
      <h2 className="text-md mb-6">Contact</h2>
      <div className="w-full border border-grayscale-200 rounded-2xs p-4 flex items-center mb-4">
        <Icon name="user" className="w-6 h-6" />
        <div className="ml-8 mr-16">
          <p className="text-xs text-grayscale-500">Email</p>
          <p>jovana.jerimic@gmail.com</p>
        </div>
      </div>
      <p className="text-xs text-grayscale-500 mb-16">
        If you want to change your email please contact us via customer support.
      </p>
      <h2 className="text-md mb-6">Address</h2>
      <div className="w-full border border-grayscale-200 rounded-2xs p-4 flex mb-6">
        <Icon name="user" className="w-6 h-6 mt-2.5" />
        <div className="ml-8 mr-4 max-w-66 w-full">
          <div className="flex justify-between gap-4 mb-8">
            <div className="flex-1">
              <p className="text-xs text-grayscale-500">Country</p>
              <p className="max-w-50 truncate">Croatia</p>
            </div>
            <div className="flex-1">
              <p className="text-xs text-grayscale-500">Address</p>
              <p className="max-w-50 truncate">Duvanjska 3</p>
            </div>
          </div>
          <div className="mb-8">
            <p className="text-xs text-grayscale-500">
              Apartment, suite, etc. (Optional)
            </p>
            <p className="max-w-50 truncate">2nd floor</p>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs text-grayscale-500">Postal Code</p>
              <p className="max-w-50 truncate">10000</p>
            </div>
            <div className="flex-1">
              <p className="text-xs text-grayscale-500">City</p>
              <p className="max-w-50 truncate">Zagreb</p>
            </div>
          </div>
        </div>
        <Button
          iconName="trash"
          size="sm"
          variant="outline"
          className="ml-auto w-8 px-0 shrink-0"
        />
        <Button variant="outline" size="sm" className="ml-4 shrink-0">
          Change
        </Button>
      </div>
      <Button className="mb-16">Add another address</Button>
      <h2 className="text-md mb-6">Change password</h2>
      <p className="text-grayscale-500 mb-6">
        To change your password, we'll send you an email. Just click on the
        reset button below.
      </p>
      <Button>Reset password</Button>
    </div>
  )
}
