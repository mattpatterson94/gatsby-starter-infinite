import * as React from "react"

interface SignatureProps {
  className?: string
  authorName: string
  authorUrl: string
}

export default function Signature({
  authorName,
  authorUrl,
  className,
}: SignatureProps) {
  return (
    <p className={className}>
      Site by{" "}
      <a
        target={"_blank"}
        href={authorUrl}
        className={"hover:underline"}
        rel="noreferrer"
      >
        {authorName}
      </a>
    </p>
  )
}
