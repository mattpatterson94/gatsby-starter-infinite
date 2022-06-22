import * as React from "react"
import classNames from "classnames"

type Theme = "light" | "dark" | "primary" | "secondary"
type OutlineTheme = `${Theme}-outline`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Theme | OutlineTheme
  hoverTheme: Theme | OutlineTheme
}

const hoverThemes: Record<Theme | OutlineTheme, string> = {
  light:
    "hover:bg-white focus:bg-white hover:border-back focus:border-back hover:text-body focus:text-body",
  dark: "hover:bg-body focus:bg-body hover:border-body focus:border-body hover:text-white focus:text-white",
  primary:
    "hover:bg-primary focus:bg-primary hover:border-primary focus:border-primary hover:text-white focus:text-white",
  secondary:
    "hover:bg-secondary focus:bg-secondary hover:border-secondary focus:border-secondary hover:text-body focus:text-body",
  "dark-outline": "",
  "light-outline": "",
  "primary-outline": "",
  "secondary-outline": "",
}

const themes: Record<Theme | OutlineTheme, string> = {
  light: "bg-white border-white text-body",
  dark: "bg-body border-body text-white",
  primary: "bg-primary border-primary text-white",
  secondary: "bg-secondary border-secondary text-body",
  "dark-outline": "text-body border-body",
  "light-outline": "text-white border-white",
  "primary-outline": "text-primary border-primary",
  "secondary-outline": "text-secondary border-secondary",
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
