import * as React from "react"
import Container from "../container"
import useSiteMetadata from "../../hooks/use-site-metadata"
import NavBar from "../nav-bar"
import NavBarMobile from "../nav-bar-mobile"
import Burger from "../burger"
import Logo from "../logo"

export default function HeaderBar() {
  const { siteUrl, title } = useSiteMetadata()
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <div className={"bg-white relative z-10"}>
      <Container className={"items-center justify-between"}>
        <div className={"w-1/3 md:w-auto"}>
          <a href={siteUrl}>
            <Logo alt={`${title} Logo`} width={250} />
          </a>
        </div>
        <NavBar />
        <Burger onClick={() => setShowMenu(!showMenu)} />
      </Container>
      <NavBarMobile showMenu={showMenu} />
    </div>
  )
}
