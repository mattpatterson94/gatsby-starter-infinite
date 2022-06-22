import * as React from "react"
import { Link } from "gatsby"
import { FaAngleDown, FaAngleRight } from "react-icons/fa"
import { useNavbarMobileMenu, MenuItem } from "../../hooks/use-menu"

import classNames from "classnames"

const navBarClass = (path: string) => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : ""

  return classNames({
    "bg-orange text-black": path === currentPath,
  })
}

const NavItem = ({ link, index }: { link: MenuItem; index: number }) => {
  const linkClass = navBarClass(link.path)

  const arrow = () => {
    const size = 20

    return active ? <FaAngleDown size={size} /> : <FaAngleRight size={size} />
  }

  const [active, setActive] = React.useState(false)

  return (
    <li>
      <Link
        className={`flex gap-2 items-center uppercase font-semibold hover:text-primary focus:text-primary text-body px-5 py-2 ${linkClass}`}
        to={link.path}
        onClick={() => setActive(!active)}
      >
        {link.name}
        {link.items && arrow()}
      </Link>

      {link.items && (
        <ul
          className={classNames("bg-gray-100 max-h-52 overflow-scroll", {
            block: active,
            hidden: !active,
          })}
        >
          {link.items.map((sublink, subIndex) => (
            <li key={`navbar-mobile-${index}-${subIndex}`}>
              <Link
                className={classNames(
                  "flex gap-2 items-center uppercase font-semibold hover:text-primary focus:text-primary text-body px-5 py-2",
                  linkClass
                )}
                to={sublink.path}
                onClick={() => setActive(!active)}
              >
                {sublink.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

interface NavBarMobileProps {
  showMenu: boolean
}

export default function NavBarMobile({ showMenu }: NavBarMobileProps) {
  const menuItems = useNavbarMobileMenu()

  return (
    <div className="w-full relative z-20 lg:hidden">
      <ul
        className={classNames(
          `transition-all ease-out z-30 absolute w-full bg-white overflow-hidden`,
          { "h-100": showMenu, "h-0": !showMenu }
        )}
      >
        {menuItems.map((link, index) => (
          <NavItem link={link} index={index} key={`navbar-mobile-${index}`} />
        ))}
      </ul>
    </div>
  )
}
