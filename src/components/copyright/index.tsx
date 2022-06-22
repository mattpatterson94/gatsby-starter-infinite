import * as React from "react"

interface CopyrightProps {
  className?: string
}

export default function Copyright({ className }: CopyrightProps) {
  return (
    <p className={className}>
      Copyright &copy; {new Date().getFullYear()} All Rights Reserved
    </p>
  )
}
