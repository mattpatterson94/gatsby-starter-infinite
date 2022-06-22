import * as React from "react"
import Heading from "../heading"
import classNames from "classnames"
import { FaAngleDown, FaAngleRight } from "react-icons/fa"

interface CollapsibleContentProps {
  className?: string
  title: string
}

export default function CollapsibleContent({
  className,
  title,
  children,
}: React.PropsWithChildren<CollapsibleContentProps>) {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className={classNames(className, "flex flex-col gap-4")}>
      <button
        onClick={() => setVisible(!visible)}
        className={"flex items-center justify-between border-b-2 pb-2"}
      >
        <Heading size={"xsmall"}>{title}</Heading>
        {visible ? <FaAngleDown /> : <FaAngleRight />}
      </button>

      {visible && children}
    </div>
  )
}
