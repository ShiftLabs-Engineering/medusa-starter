"use client"

// External components
import { usePathname } from "next/navigation"

// Components
import { twJoin } from "tailwind-merge"
import { Button, Icon, Layout, LayoutColumn, Link } from "./"

interface HeaderProps {
  colorScheme?: "black" | "white"
}

export const Header: React.FC<HeaderProps> = ({ colorScheme = "black" }) => {
  const pathName = usePathname()

  const pathNameParts = pathName.split("/").filter((part) => part !== "")

  return (
    <div
      className={twJoin(
        "absolute top-0 left-0 w-full",
        colorScheme === "black" && pathNameParts.length > 1
          ? "text-grayscale-black"
          : "text-grayscale-5"
      )}
    >
      <Layout>
        <LayoutColumn className="col-span-full">
          <div className="flex justify-between items-center h-21">
            <h1 className="font-medium text-md">
              <Link href="/">SofaSocietyCo.</Link>
            </h1>
            <div className="flex items-center gap-8">
              <Link href="/cutup/about">About</Link>
              <Link href="/cutup/inspiration">Inspiration</Link>
              <Link href="/cutup/shop">Shop</Link>
            </div>
            <div className="flex items-center gap-6">
              <Button
                variant="ghost"
                colorScheme={pathNameParts.length < 2 ? "white" : colorScheme}
                className="p-1"
              >
                <Icon name="search" className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                colorScheme={pathNameParts.length < 2 ? "white" : colorScheme}
                className="p-1 uppercase flex"
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
              <Button
                variant="ghost"
                colorScheme={pathNameParts.length < 2 ? "white" : colorScheme}
                className="p-1"
              >
                <Icon name="person" className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                colorScheme={pathNameParts.length < 2 ? "white" : colorScheme}
                className="p-1"
              >
                <Icon name="case" className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </LayoutColumn>
      </Layout>
    </div>
  )
}
