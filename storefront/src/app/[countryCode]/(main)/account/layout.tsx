"use client"

// External components
import * as React from "react"
import { useParams, usePathname } from "next/navigation"

// Componenets
import { Button } from "@/components/Button"
import { LocalizedLink } from "@/components/LocalizedLink"
import { twJoin } from "tailwind-merge"

export default function AccountLayout(props: { children: React.ReactNode }) {
  const pathName = usePathname()
  const { countryCode } = useParams()
  const currentPath = pathName.split(`/${countryCode}`)[1]

  return (
    <div className="flex">
      <div className="sticky left-0 top-0 max-w-93 pt-45 pb-9 bg-grayscale-50 w-full h-screen z-10">
        <div className="max-w-54 mx-auto flex flex-col justify-between h-full">
          <div>
            <h1 className="text-lg mb-16">My account</h1>
            <LocalizedLink
              href="/account/personal-and-security"
              className={twJoin(
                "flex py-3",
                currentPath === "/account/personal-and-security" &&
                  "font-semibold"
              )}
            >
              Personal & security
            </LocalizedLink>
            <LocalizedLink
              href="/account/my-orders"
              className={twJoin(
                "flex py-3",
                currentPath === "/account/my-orders" && "font-semibold"
              )}
            >
              My orders
            </LocalizedLink>
          </div>
          <Button variant="ghost" className="justify-start px-0 py-3">
            Log out
          </Button>
        </div>
      </div>
      {props.children}
    </div>
  )
}
