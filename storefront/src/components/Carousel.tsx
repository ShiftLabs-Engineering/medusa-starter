// TODO: Review this component.

"use client"

// External packages
import * as React from "react"
import { twJoin, twMerge } from "tailwind-merge"
import { EmblaCarouselType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"

// Components
import { Icon, IconCircle, Layout, LayoutColumn } from "./index"

export type CarouselProps = {
  heading?: React.ReactNode
  button?: React.ReactNode
  arrows?: boolean
} & React.ComponentPropsWithRef<"div">

export const Carousel: React.FC<CarouselProps> = ({
  heading,
  button,
  arrows = true,
  children,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    skipSnaps: true,
  })
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className={twMerge("overflow-hidden", className)}>
      <Layout>
        <LayoutColumn className="relative">
          <div className="mb-16 flex flex-wrap justify-between items-center gap-x-10 gap-y-2">
            {heading}
            {(arrows || button) && (
              <div className="flex gap-2">
                {button}
                {arrows && (
                  <>
                    <button
                      type="button"
                      onClick={scrollPrev}
                      disabled={prevBtnDisabled}
                      className={twJoin(
                        "max-md:hidden transition-opacity",
                        prevBtnDisabled && "opacity-50"
                      )}
                    >
                      <IconCircle>
                        <Icon
                          name="arrow-left"
                          className="w-6 h-6 text-black"
                        />
                      </IconCircle>
                    </button>
                    <button
                      type="button"
                      onClick={scrollNext}
                      disabled={nextBtnDisabled}
                      className={twJoin(
                        "max-md:hidden transition-opacity",
                        nextBtnDisabled && "opacity-50"
                      )}
                    >
                      <IconCircle>
                        <Icon
                          name="arrow-right"
                          className="w-6 h-6 text-black"
                        />
                      </IconCircle>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
          <div ref={emblaRef}>
            <div className="flex touch-pan-y gap-4 md:gap-10">
              {React.Children.map(children, (child) => {
                return (
                  <div className="w-[80%] sm:w-[60%] lg:w-full max-w-124 flex-shrink-0">
                    {child}
                  </div>
                )
              })}
            </div>
          </div>
        </LayoutColumn>
      </Layout>
    </div>
  )
}
