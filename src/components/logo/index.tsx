import * as React from "react"
import ResponsiveImage, { ResponsiveImageSource } from "../responsive-image"
import logo from "./logo.svg"

interface LogoProps {
  width?: number
  className?: string
  alt: string
}

export default function Logo({ width, alt, className }: LogoProps) {
  return (
    <ResponsiveImage
      width={width}
      loading={"lazy"}
      alt={alt}
      src={logo}
      className={className}
    >
      <ResponsiveImageSource
        breakpoints={{
          "0px": "1000px",
        }}
        imageSizes={{
          "1000w": logo,
        }}
      />
    </ResponsiveImage>
  )
}
