import * as React from "react"

type AnimateOnScrollProps = {
  className?: string
  transition: string
  delay?: string
  ease?: string
}

function AnimateOnScroll({
  className,
  transition,
  delay,
  ease,
  children,
}: React.PropsWithChildren<AnimateOnScrollProps>) {
  return (
    <div
      className={className}
      data-sal={transition}
      data-sal-delay={delay || 0}
      data-sal-easing={ease || "ease"}
    >
      {children}
    </div>
  )
}

export default AnimateOnScroll
