import * as React from "react"
import classNames from "classnames"

type Theme = "light" | "dark"
type OutlineTheme = `${Theme}-outline`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Theme | OutlineTheme
  hoverTheme: Theme | OutlineTheme
}

const hoverThemes: Record<Theme | OutlineTheme, string> = {
  light:
    "hover:bg-white focus:bg-white hover:border-back focus:border-back hover:text-gray-800 focus:text-gray-800",
  dark: "hover:bg-gray-800 focus:bg-gray-800 hover:border-gray-800 focus:border-gray-800 hover:text-white focus:text-white",
  "dark-outline": "",
  "light-outline": "",
}

const themes: Record<Theme | OutlineTheme, string> = {
  light: "bg-white border-white text-gray-800",
  dark: "bg-gray-800 border-gray-800 text-white",
  "dark-outline": "text-gray-800 border-gray-800",
  "light-outline": "text-white border-white",
}

const buttonClasses =
  "py-2 px-6 uppercase rounded-2xl font-semibold transition-colors border-4 inline-block"

export { buttonClasses, themes, hoverThemes }

export default function Button({
  children,
  theme,
  hoverTheme,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        buttonClasses,
        themes[theme],
        hoverThemes[hoverTheme],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
