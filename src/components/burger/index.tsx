import * as React from "react"
import classNames from "classnames"

interface BurgerProps {
  className?: string
  icon?: React.ReactElement
  title?: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Burger({
  className,
  onClick,
  icon,
  title,
}: BurgerProps) {
  const genericHamburgerLine = `h-0.5 w-4 my-0.5 rounded-full bg-black transition ease transform duration-300`
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(!isOpen)

    onClick(event)
  }

  return (
    <button
      title={title}
      className={classNames(
        "flex lg:hidden flex-col h-12 w-4 justify-center items-center",
        className
      )}
      onClick={toggleMenu}
    >
      {icon ?? (
        <>
          <div
            className={classNames(genericHamburgerLine, {
              "rotate-45 translate-y-1.5": isOpen,
            })}
          />
          <div
            className={classNames(genericHamburgerLine, {
              "opacity-0": isOpen,
            })}
          />
          <div
            className={classNames(genericHamburgerLine, {
              "-rotate-45 -translate-y-1.5": isOpen,
            })}
          />
        </>
      )}
    </button>
  )
}
