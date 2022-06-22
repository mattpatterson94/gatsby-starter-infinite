import * as React from "react"
import classNames from "classnames"

type Link = {
  href: string
  content: string | React.ReactElement
  target?: React.HTMLAttributeAnchorTarget
  visible?: boolean
}

interface ButtonGroupProps {
  links: Link[]
  className?: string
}

export default function ButtonGroup({ className, links }: ButtonGroupProps) {
  const filteredLinks = links.filter(link => link.visible ?? true)

  return (
    <span
      className={classNames(
        "relative z-0 inline-flex shadow-sm rounded-md",
        className
      )}
    >
      {filteredLinks.map((link, i) => {
        const buttonGroupClasses = classNames(
          "relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-body hover:bg-gray-100",
          {
            "rounded-l-md": i === 0,
            "-mx-px": i !== 0,
            "rounded-r-md": i === filteredLinks.length - 1,
          }
        )

        return (
          <a
            key={`button-group-${i}`}
            className={buttonGroupClasses}
            target={link.target ?? "_blank"}
            href={link.href}
            rel="noreferrer"
          >
            {link.content}
          </a>
        )
      })}
    </span>
  )
}
