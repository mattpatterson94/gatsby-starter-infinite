import * as React from "react"
import Container from "../container"
import useSiteMetadata from "../../hooks/use-site-metadata"
import NavBar from "../nav-bar"
import Burger from "../burger"
import NavBarMobile from "../nav-bar-mobile"
import Logo from "../logo"

export default function Header() {
  const { siteUrl } = useSiteMetadata()
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header
      className={"absolute h-24 top-0 flex flex-col justify-center w-full"}
    >
      <Container
        breakpoint={"xl"}
        className={"w-full justify-between items-center"}
      >
        <Burger onClick={() => setShowMenu(!showMenu)} />
        <div className={"w-1/2 flex justify-center lg:w-auto"}>
          <a href={siteUrl}>
            <Logo alt={""} width={275} />
          </a>
        </div>
        <div>
          <NavBar />
        </div>
      </Container>
      <Container>
        <NavBarMobile showMenu={showMenu} />
      </Container>
    </header>
  )
}
