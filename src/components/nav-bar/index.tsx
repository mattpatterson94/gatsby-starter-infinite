import * as React from "react"
import { Link } from "gatsby"
import { FaAngleDown } from "react-icons/fa"
import { useNavbarMenu } from "../../hooks/use-menu"
import classNames from "classnames"

const activePath = (path: string) => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : ""

  return path === currentPath
}

export default function NavBar() {
  const menuItems = useNavbarMenu()

  const navBarClass = (path: string) => {
    const currentActivePath = activePath(path)

    return classNames("py-4", {
      "text-blue-500 px-2 py-4": currentActivePath,
      "py-4 hover:text-blue-600 text-black": !currentActivePath,
    })
  }

  const navBarSubclass = (path: string) => {
    const currentActivePath = activePath(path)

    return classNames("font-normal p-2", {
      "text-blue-500 block": currentActivePath,
      "text-black block hover:text-blue-500": !currentActivePath,
    })
  }

  return (
    <ul className={"gap-8 hidden lg:flex"}>
      {menuItems.map((link, index) => {
        const linkClass = navBarClass(link.path)

        return (
          <li
            className={
              "uppercase transition-colors gap-2 flex items-center font-semibold navbar-link"
            }
            key={`navbar-${index}`}
          >
            <Link className={linkClass} to={link.path}>
              {link.name}
            </Link>
            {link.items && <FaAngleDown size={20} />}
            {link.items && (
              <ul
                className={
                  "navbar-dropdown absolute hidden overflow-scroll max-h-96 flex-col w-44 p-2 bg-white top-full border-t-2 rounded-b-md"
                }
              >
                {link.items.map((sublink, subIndex) => (
                  <li key={`nav-${index}-${subIndex}`}>
                    <Link
                      className={navBarSubclass(sublink.path)}
                      to={sublink.path}
                    >
                      {sublink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}
