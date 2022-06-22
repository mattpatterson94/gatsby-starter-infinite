import * as React from "react"

interface ResponsiveImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string
  src: string
}

export default function ResponsiveImage({
  alt,
  src,
  children,
  ...props
}: ResponsiveImageProps) {
  return (
    <picture>
      {children}
      <img src={src} alt={alt} loading={"lazy"} {...props} />
    </picture>
  )
}

interface ResponsiveImageSourceProps
  extends Omit<
    React.SourceHTMLAttributes<HTMLSourceElement>,
    "src" | "srcSet" | "sizes" | "media"
  > {
  minWidth?: string
  breakpoints: {
    [key: string]: string
  }
  imageSizes: {
    [key: string]: string
  }
}

export function ResponsiveImageSource({
  minWidth,
  breakpoints,
  imageSizes,
  ...props
}: ResponsiveImageSourceProps) {
  return (
    <source
      media={minWidth ? `(min-width: ${minWidth})` : undefined}
      srcSet={Object.keys(imageSizes)
        .map(size => `${imageSizes[size]} ${size}`)
        .join(", ")}
      sizes={Object.keys(breakpoints)
        .map(
          breakpoint => `min-width(${breakpoint}) ${breakpoints[breakpoint]}`
        )
        .join(", ")}
      {...props}
    />
  )
}
