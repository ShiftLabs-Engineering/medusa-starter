"use client"

// External components
import * as React from "react"
import { usePathname } from "next/navigation"
import { twJoin } from "tailwind-merge"

// Modules
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// Components
import { Button, Drawer, Icon, Input, Layout, LayoutColumn, Link } from "./"

interface HeaderProps {
  colorScheme?: "black" | "white"
}

export const Header: React.FC<HeaderProps> = ({ colorScheme = "black" }) => {
  const pathName = usePathname()

  const pathNameParts = pathName.split("/").filter((part) => part !== "")

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div
      className={twJoin(
        "absolute top-0 left-0 w-full",
        colorScheme === "black" && pathNameParts.length > 1
          ? "text-black"
          : "text-white"
      )}
    >
      <Layout>
        <LayoutColumn>
          <div className="flex justify-between items-center h-21">
            <h1 className="font-medium text-md">
              <Link href="/cutup">SofaSocietyCo.</Link>
            </h1>
            <div className="flex items-center gap-8 max-md:hidden">
              <Link href="/cutup/about">About</Link>
              <Link href="/cutup/inspiration">Inspiration</Link>
              <Link href="/cutup/shop">Shop</Link>
            </div>
            <div className="flex items-center gap-3 lg:gap-6 max-md:hidden">
              <Button
                variant="ghost"
                className={twJoin(
                  "p-1",
                  pathNameParts.length < 2 && "text-white"
                )}
              >
                <Icon name="search" className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                className={twJoin(
                  "p-1 uppercase flex",
                  pathNameParts.length < 2 && "text-white"
                )}
              >
                HR
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="24"
                  fill="none"
                  className="mx-2"
                >
                  <path stroke="currentColor" d="M1 0v24" />
                </svg>
                EUR
              </Button>
              {/* <Button
                variant="ghost"
                className={twJoin(
                  "p-1",
                  pathNameParts.length < 2 && "text-white"
                )}
              >
                <Icon name="user" className="w-6 h-6" />
              </Button> */}
              <LocalizedClientLink href="/cart">
                <Button
                  variant="ghost"
                  className={twJoin(
                    "p-1",
                    pathNameParts.length < 2 && "text-white"
                  )}
                >
                  <Icon name="case" className="w-6 h-6" />
                </Button>
              </LocalizedClientLink>
            </div>
            <div className="flex items-center gap-7 md:hidden">
              <LocalizedClientLink href="/cart">
                <Button
                  variant="ghost"
                  className={twJoin(
                    "p-1",
                    pathNameParts.length < 2 && "text-white"
                  )}
                >
                  <Icon name="case" className="w-6 h-6" />
                </Button>
              </LocalizedClientLink>
              <Button
                variant="ghost"
                className={twJoin(
                  "p-1",
                  pathNameParts.length < 2 && "text-white"
                )}
                onClick={() => setIsMenuOpen(true)}
              >
                <Icon name="menu" className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </LayoutColumn>
      </Layout>
      <Drawer
        isOpened={isMenuOpen}
        onCloseClick={() => setIsMenuOpen(false)}
        onBackdropClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col text-white h-full">
          <div className="flex items-center pb-6 mb-8 pt-5 w-full border-b border-white px-8">
            <Button
              variant="ghost"
              className="text-white p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <Icon name="search" className="w-6 h-6" />
            </Button>
            <Input placeholder="Search" className="h-auto bg-black px-1" />
          </div>
          <div className="text-lg flex flex-col gap-8 font-medium px-8">
            <Link href="/cutup/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link
              href="/cutup/inspiration"
              onClick={() => setIsMenuOpen(false)}
            >
              Inspiration
            </Link>
            <Link href="/cutup/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
          </div>
          <div className="flex justify-between w-full mt-auto items-center px-8 pb-8">
            <Link href="/cutup/about" onClick={() => setIsMenuOpen(false)}>
              My account
            </Link>
            <Button variant="ghost" className="text-white">
              HR
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="24"
                fill="none"
                className="mx-2"
              >
                <path stroke="currentColor" d="M1 0v24" />
              </svg>
              EUR
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  )
}
