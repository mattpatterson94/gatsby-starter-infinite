import * as React from "react"
import { HTMLAttributes } from "react"
import classNames from "classnames"

type Size = "xsmall" | "small" | "medium" | "large" | "title" | "subtitle"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
  size?: Size
  color?: string
}

export default function Heading({
  className = "",
  size = "medium",
  color = "text-heading",
  children,
  ...props
}: React.PropsWithChildren<HeadingProps>) {
  const tags: Record<Size, React.ElementType> = {
    title: "h1",
    subtitle: "h2",
    large: "h2",
    medium: "h3",
    small: "h4",
    xsmall: "h5",
  }

  const classes: Record<Size, string> = {
    title: "text-3xl font-bold md:text-4xl",
    subtitle: "text-md font-light",
    large: "text-3xl font-extrabold uppercase",
    medium: "text-2xl font-bold uppercase",
    small: "text-lg font-bold uppercase",
    xsmall: "text-md font-bold",
  }

  const Tag = tags[size]

  return (
    <Tag className={classNames(classes[size], className, color)} {...props}>
      {children}
    </Tag>
  )
}
