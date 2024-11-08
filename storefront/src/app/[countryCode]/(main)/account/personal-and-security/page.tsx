"use client"

// External components
import { DialogTrigger, Dialog } from "react-aria-components"

// Components
import { Icon } from "@/components/Icon"
import { Button } from "@/components/Button"
import { Input } from "@/components/Forms"
import { UiModal, UiModalOverlay } from "@/components/ui/Modal"
import CountrySelect from "@modules/checkout/components/country-select"

export default function AccountPersonalAndSecurityPage() {
  return (
    <div className="md:max-w-150 xl:max-w-200 w-full mx-auto pt-8 md:pt-45 pb-36 md:px-10">
      <h1 className="text-lg mb-8 md:mb-14">Personal &amp; security</h1>
      <h2 className="text-md font-normal mb-6">Personal information</h2>
      <div className="w-full border border-grayscale-200 rounded-2xs p-4 flex items-center mb-16">
        <Icon name="user" className="w-6 h-6" />
        <div className="ml-8 mr-16">
          <p className="text-xs text-grayscale-500 mb-1.5">Name</p>
          <p className="max-w-50 truncate">Jovana Jerimic</p>
        </div>
        <div className="mr-4">
          <p className="text-xs text-grayscale-500 mb-1.5">Number</p>
          <p>-</p>
        </div>
        <DialogTrigger>
          <Button variant="outline" className="h-auto self-stretch ml-auto">
            Change
          </Button>
          <UiModalOverlay>
            <UiModal>
              <Dialog className="focus-visible:outline-none">
                {({ close }) => (
                  <>
                    <p className="text-md mb-10">Personal information</p>
                    <div className="flex gap-6 mb-8">
                      <Input
                        placeholder="First name"
                        name="first_name"
                        required
                        variant="outline"
                        wrapperClassName="flex-1"
                      />
                      <Input
                        placeholder="Last name"
                        name="last_name"
                        required
                        variant="outline"
                        wrapperClassName="flex-1"
                      />
                    </div>
                    <Input
                      placeholder="Phone"
                      name="last_name"
                      required
                      variant="outline"
                      wrapperClassName="flex-1 mb-10"
                    />
                    <div className="flex justify-between">
                      <Button>Save changes</Button>
                      <Button variant="outline" onClick={close}>
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </Dialog>
            </UiModal>
          </UiModalOverlay>
        </DialogTrigger>
      </div>
      <h2 className="text-md font-normal mb-6">Contact</h2>
      <div className="w-full border border-grayscale-200 rounded-2xs p-4 flex items-center mb-4">
        <Icon name="user" className="w-6 h-6" />
        <div className="ml-8 mr-16">
          <p className="text-xs text-grayscale-500 mb-1.5">Email</p>
          <p>jovana.jerimic@gmail.com</p>
        </div>
      </div>
      <p className="text-xs text-grayscale-500 mb-16">
        If you want to change your email please contact us via customer support.
      </p>
      <h2 className="text-md font-normal mb-6">Address</h2>
      <div className="w-full border border-grayscale-200 rounded-2xs p-4 flex mb-6">
        <Icon name="user" className="w-6 h-6 mt-2.5" />
        <div className="ml-8 mr-4 max-w-66 w-full">
          <div className="flex justify-between gap-4 mb-8">
            <div className="flex-1">
              <p className="text-xs text-grayscale-500 mb-1.5">Country</p>
              <p className="max-w-50 truncate">Croatia</p>
            </div>
            <div className="flex-1">
              <p className="text-xs text-grayscale-500 mb-1.5">Address</p>
              <p className="max-w-50 truncate">Duvanjska 3</p>
            </div>
          </div>
          <div className="mb-8">
            <p className="text-xs text-grayscale-500 mb-1.5">
              Apartment, suite, etc. (Optional)
            </p>
            <p className="max-w-50 truncate">2nd floor</p>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs text-grayscale-500 mb-1.5">Postal Code</p>
              <p className="max-w-50 truncate">10000</p>
            </div>
            <div className="flex-1">
              <p className="text-xs text-grayscale-500 mb-1.5">City</p>
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
        <DialogTrigger>
          <Button variant="outline" size="sm" className="ml-4 shrink-0">
            Change
          </Button>
          <UiModalOverlay>
            <UiModal>
              <Dialog className="focus-visible:outline-none">
                {({ close }) => (
                  <>
                    <p className="text-md mb-10">Change address</p>
                    <div className="flex flex-col gap-8">
                      <CountrySelect />
                      <Input placeholder="Adress" required variant="outline" />
                      <Input
                        placeholder="Apartment, suite, etc. (Optional)"
                        required
                        variant="outline"
                      />
                      <div className="flex gap-6 mb-10">
                        <Input
                          placeholder="Postal code"
                          required
                          variant="outline"
                          wrapperClassName="flex-1"
                        />
                        <Input
                          placeholder="City"
                          required
                          variant="outline"
                          wrapperClassName="flex-1"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button>Save changes</Button>
                      <Button variant="outline" onClick={close}>
                        Cancel
                      </Button>
                    </div>
                  </>
                )}
              </Dialog>
            </UiModal>
          </UiModalOverlay>
        </DialogTrigger>
      </div>
      <DialogTrigger>
        <Button className="mb-16">Add another address</Button>
        <UiModalOverlay>
          <UiModal>
            <Dialog className="focus-visible:outline-none">
              {({ close }) => (
                <>
                  <p className="text-md mb-10">Add another address</p>
                  <div className="flex flex-col gap-8">
                    <CountrySelect />
                    <Input placeholder="Adress" required variant="outline" />
                    <Input
                      placeholder="Apartment, suite, etc. (Optional)"
                      required
                      variant="outline"
                    />
                    <div className="flex gap-6 mb-10">
                      <Input
                        placeholder="Postal code"
                        required
                        variant="outline"
                        wrapperClassName="flex-1"
                      />
                      <Input
                        placeholder="City"
                        required
                        variant="outline"
                        wrapperClassName="flex-1"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button>Save changes</Button>
                    <Button variant="outline" onClick={close}>
                      Cancel
                    </Button>
                  </div>
                </>
              )}
            </Dialog>
          </UiModal>
        </UiModalOverlay>
      </DialogTrigger>
      <h2 className="text-md font-normal mb-4">Change password</h2>
      <p className="text-grayscale-500 mb-6">
        To change your password, we'll send you an email. Just click on the
        reset button below.
      </p>
      <DialogTrigger>
        <Button>Reset password</Button>
        <UiModalOverlay isDismissable={false} className="bg-transparent">
          <UiModal className="relative">
            <Dialog className="focus-visible:outline-none">
              {({ close }) => (
                <>
                  <p className="text-md mb-12">Reset password</p>
                  <p className="text-grayscale-500">
                    We have sent an email with instructions on how to change the
                    password.
                  </p>
                  <button onClick={close} className="absolute top-6 right-6">
                    <Icon name="close" className="w-6 h-6" />
                  </button>
                </>
              )}
            </Dialog>
          </UiModal>
        </UiModalOverlay>
      </DialogTrigger>
    </div>
  )
}
