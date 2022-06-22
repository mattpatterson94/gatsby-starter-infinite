import * as React from "react"
import classNames from "classnames"

type ContainerProps = {
  id?: string
  className?: string
  fullWidth?: boolean
  style?: React.CSSProperties
  breakpoint?: "" | "xs" | "sm" | "md" | "lg" | "xl"
}

export default function Container({
  id,
  className,
  fullWidth = false,
  breakpoint = "",
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
      className={classNames("mx-auto flex px-4", className, {
        "max-w-full w-full": fullWidth,
        [containerClass[breakpoint]]: !fullWidth,
      })}
    >
      {children}
    </div>
  )
}
