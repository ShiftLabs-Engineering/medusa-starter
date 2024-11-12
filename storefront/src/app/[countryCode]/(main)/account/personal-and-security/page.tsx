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
    <>
      <h1 className="text-lg mb-8 md:mb-16">Personal &amp; security</h1>
      <h2 className="text-md font-normal mb-6">Personal information</h2>
      <div className="w-full border border-grayscale-200 rounded-xs p-4 flex flex-wrap gap-8 max-lg:flex-col lg:items-center mb-16">
        <div className="flex gap-8 flex-1">
          <Icon name="user" className="w-6 h-6 mt-2.5" />
          <div className="flex max-sm:flex-col sm:flex-wrap gap-6 sm:gap-x-16">
            <div>
              <p className="text-xs text-grayscale-500 mb-1.5">Name</p>
              <p>Jovana Jerimic</p>
            </div>
            <div>
              <p className="text-xs text-grayscale-500 mb-1.5">Number</p>
              <p>-</p>
            </div>
          </div>
        </div>
        <DialogTrigger>
          <Button variant="outline">Change</Button>
          <UiModalOverlay>
            <UiModal>
              <Dialog className="focus-visible:outline-none">
                {({ close }) => (
                  <>
                    <p className="text-md mb-8 sm:mb-10">
                      Personal information
                    </p>
                    <div className="flex flex-col gap-4 sm:gap-8">
                      <div className="flex max-xs:flex-col gap-y-4 gap-x-6">
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
                        wrapperClassName="flex-1 mb-8 sm:mb-10"
                      />
                    </div>
                    <div className="flex gap-6 justify-between">
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
      <div className="w-full border border-grayscale-200 rounded-xs p-4 flex flex-wrap gap-y-6 gap-x-8 items-center mb-4">
        <Icon name="user" className="w-6 h-6" />
        <div>
          <p className="text-xs text-grayscale-500 mb-1.5">Email</p>
          <p>jovana.jerimic@gmail.com</p>
        </div>
      </div>
      <p className="text-xs text-grayscale-500 mb-16">
        If you want to change your email please contact us via customer support.
      </p>
      <h2 className="text-md font-normal mb-6">Address</h2>
      <div className="w-full border border-grayscale-200 rounded-xs p-4 flex flex-wrap gap-8 max-lg:flex-col mb-6">
        <div className="flex flex-1 gap-8">
          <Icon name="user" className="w-6 h-6 mt-2.5" />
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-wrap justify-between gap-6">
              <div className="grow basis-0">
                <p className="text-xs text-grayscale-500 mb-1.5">Country</p>
                <p>Croatia</p>
              </div>
              <div className="grow basis-0">
                <p className="text-xs text-grayscale-500 mb-1.5">Address</p>
                <p>Duvanjska 3</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-grayscale-500 mb-1.5">
                Apartment, suite, etc. (Optional)
              </p>
              <p>2nd floor</p>
            </div>
            <div className="flex flex-wrap justify-between gap-6">
              <div className="grow basis-0">
                <p className="text-xs text-grayscale-500 mb-1.5">Postal Code</p>
                <p>10000</p>
              </div>
              <div className="grow basis-0">
                <p className="text-xs text-grayscale-500 mb-1.5">City</p>
                <p>Zagreb</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button
            iconName="trash"
            size="sm"
            variant="outline"
            className="w-8 px-0 shrink-0"
          />
          <DialogTrigger>
            <Button variant="outline" size="sm" className="shrink-0 flex-1">
              Change
            </Button>
            <UiModalOverlay>
              <UiModal>
                <Dialog className="focus-visible:outline-none">
                  {({ close }) => (
                    <>
                      <p className="text-md mb-8 md:mb-10">Change address</p>
                      <div className="flex flex-col gap-4 md:gap-8 mb-8 md:mb-10">
                        <CountrySelect />
                        <Input
                          placeholder="Adress"
                          required
                          variant="outline"
                        />
                        <Input
                          placeholder="Apartment, suite, etc. (Optional)"
                          required
                          variant="outline"
                        />
                        <div className="flex max-xs:flex-col gap-4 md:gap-6">
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
                      <div className="flex gap-6 justify-between">
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
      </div>
      <DialogTrigger>
        <Button className="mb-16">Add another address</Button>
        <UiModalOverlay>
          <UiModal>
            <Dialog className="focus-visible:outline-none">
              {({ close }) => (
                <>
                  <p className="text-md mb-8 md:mb-10">Add another address</p>
                  <div className="flex flex-col gap-4 md:gap-8 mb-8 md:mb-10">
                    <CountrySelect />
                    <Input placeholder="Adress" required variant="outline" />
                    <Input
                      placeholder="Apartment, suite, etc. (Optional)"
                      required
                      variant="outline"
                    />
                    <div className="flex max-xs:flex-col gap-4 md:gap-6">
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
                  <div className="flex gap-6 justify-between">
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
                  <button onClick={close} className="absolute top-4 right-6">
                    <Icon name="close" className="w-6 h-6" />
                  </button>
                </>
              )}
            </Dialog>
          </UiModal>
        </UiModalOverlay>
      </DialogTrigger>
      <div className="mt-16 md:hidden">
        <p className="text-md mb-6">Log out</p>
        <Button variant="outline" isFullWidth>
          Log out
        </Button>
      </div>
    </>
  )
}
