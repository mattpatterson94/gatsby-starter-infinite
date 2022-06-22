import * as React from "react"
import { HTMLAttributes } from "react"
import classNames from "classnames"

type Size = "small" | "medium" | "large" | "xlarge" | "xxlarge"

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  html?: string
  size?: Size
}

export default function Content({
  className,
  children,
  html,
  size = "medium",
  ...props
}: React.PropsWithChildren<ContentProps>) {
  const contentSizes: Record<Size, string> = {
    small: "prose-sm",
    medium: "prose-base",
    large: "prose-lg",
    xlarge: "prose-xl",
    xxlarge: "prose-2xl",
  }

  const contentSize = contentSizes[size]

  return (
    <div
      className={classNames("prose", contentSize, className)}
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      {...props}
    >
      {children}
    </div>
  )
}
