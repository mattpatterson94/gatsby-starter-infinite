import * as React from "react"
import Container from "../container"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { File } from "../../graphql-types"
import Heading from "../heading"
import classNames from "classnames"

interface HeroProps {
  className?: string
  title: string
  subtitle?: string
  titleColor?: string
  titleClassName?: string
  subtitleColor?: string
  subtitleClassName?: string
  heroImage?: File | string
  hideOverlay?: boolean
  compact?: boolean
}

export default function Hero({
  heroImage,
  title,
  titleColor,
  titleClassName,
  subtitle,
  subtitleColor,
  subtitleClassName,
  children,
  hideOverlay,
  className,
  compact,
}: React.PropsWithChildren<HeroProps>) {
  const HeroImage = () => {
    if (!heroImage) return null

    const imageProps = {
      className: "grid-area-1-1",
      alt: title,
    }

    if (typeof heroImage === "string") {
      return (
        <img
          {...imageProps}
          className={classNames(
            "max-h-full object-cover w-full",
            imageProps.className
          )}
          alt={imageProps.alt}
          src={heroImage}
        />
      )
    }

    return (
      <GatsbyImage
        image={getImage(heroImage as unknown as IGatsbyImageData)!}
        {...imageProps}
      />
    )
  }

  return (
    <Container fullWidth className={"px-0"}>
      <div
        className={"grid w-full bg-gray-100"}
        style={{ minHeight: 150, maxHeight: compact ? 150 : 450 }}
      >
        <HeroImage />

        <div
          className={classNames("flex justify-center relative grid-area-1-1", {
            "bg-black/50": !!heroImage && !hideOverlay,
          })}
        >
          <div
            className={classNames(
              "max-w-3xl text-center flex flex-col gap-6 px-4 py-6 md:py-0 justify-center bg-cover relative",
              className
            )}
          >
            <Heading
              size={"title"}
              color={titleColor ?? "text-white"}
              className={classNames("text-center", titleClassName)}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {subtitle && (
              <Heading
                size={"subtitle"}
                color={subtitleColor ?? "text-white"}
                className={classNames(
                  "italic font-light max-w-md",
                  subtitleClassName
                )}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            {children}
          </div>
        </div>
      </div>
    </Container>
  )
}
