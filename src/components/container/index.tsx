import * as React from "react"
import classNames from "classnames"

type ContainerProps = {
  id?: string
  className?: string
  fullWidth?: boolean
  centered?: boolean
  vGap?: boolean
  hGap?: boolean
  style?: React.CSSProperties
  breakpoint?: "" | "xs" | "sm" | "md" | "lg" | "xl"
}

export default function Container({
  id,
  className,
  fullWidth = false,
  breakpoint = "",
  centered = false,
  vGap = false,
  hGap = true,
  children,
  style,
}: React.PropsWithChildren<ContainerProps>) {
  const containerClass = {
    "": "container",
    xs: "xs:container",
    sm: "sm:container",
    md: "md:container",
    lg: "lg:container",
    xl: "xl:container",
  }

  return (
    <div
      id={id}
      style={style}
      className={classNames("mx-auto flex", className, {
        "max-w-full w-full": fullWidth,
        [containerClass[breakpoint]]: !fullWidth,
        "py-lg md:py-xl": vGap,
        "px-md": hGap,
        "justify-center": centered,
      })}
    >
      {children}
    </div>
  )
}
