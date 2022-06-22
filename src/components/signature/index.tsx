import * as React from "react"

interface SignatureProps {
  className?: string
}

export default function Signature({ className }: SignatureProps) {
  return (
    <p className={className}>
      Site by{" "}
      <a
        target={"_blank"}
        href={"https://mattdoesdev.com"}
        className={"hover:underline"}
        rel="noreferrer"
      >
        mattdoesdev
      </a>
    </p>
  )
}
