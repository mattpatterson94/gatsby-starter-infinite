import * as React from "react"
import Container from "../../../components/container"
import Logo from "../../../components/logo"
import * as urlHelpers from "../../../lib/url-helpers"
import classNames from "classnames"
import Heading from "../../../components/heading"
import Signature from "../../../components/signature"
import Copyright from "../../../components/copyright"
import { Link } from "gatsby"
import useSiteMetadata from "../../../hooks/use-site-metadata"

interface FooterListProps<T = any> {
  items: Array<T>
  renderUrl: (item: T) => string
  renderTitle: (item: T) => string
  renderKey: (item: T) => string
  className?: string
  itemClassName?: string
  target?: string
}

function FooterList<T = any>({
  items,
  renderUrl,
  renderTitle,
  renderKey,
  className,
  itemClassName,

  target,
}: FooterListProps<T>) {
  return (
    <ul
      className={classNames("text-md lg:text-lg", className, {
        "columns-3": items.length > 10,
      })}
    >
      {items.map(item => (
        <li key={renderKey(item)}>
          <a
            target={target}
            className={classNames("font-light hover:underline", itemClassName)}
            href={renderUrl(item)}
          >
            {renderTitle(item)}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  const { title, authorName, authorUrl } = useSiteMetadata()

  return (
    <div>
      <footer
        id={"footer"}
        className={
          "font-cursive text-white text-sm flex bg-neutral-700 justify-center items-center w-full p-6 lg:p-12"
        }
      >
        <Container
          breakpoint={"lg"}
          className={
            "gap-6 px-0 mx-0 lg:px-4 lg:gap-12 justify-between w-full flex-col md:flex-row"
          }
        >
          <div
            className={
              "flex justify-center md:justify-start w-auto md:w-28 lg:w-auto"
            }
          >
            <Link to={"/"}>
              <Logo
                className={"filter-invert"}
                alt={`${title} Logo`}
                width={150}
              />
            </Link>
          </div>
          <div className={"hidden md:flex flex-col gap-4"}>
            <Heading size={"small"} color={"text-white"}>
              Column 1
            </Heading>
            <FooterList
              renderKey={item => item.path}
              items={[{ name: "About", path: urlHelpers.aboutUrl() }]}
              renderUrl={item => item.path}
              renderTitle={item => item.name}
            />
          </div>
          <div className={"hidden md:flex flex-col gap-4"}>
            <Heading size={"small"} color={"text-white"}>
              Column 2
            </Heading>
            <FooterList
              renderKey={item => item.path}
              items={[{ name: "Contact Us", path: urlHelpers.contactUrl() }]}
              renderUrl={item => item.path}
              renderTitle={item => item.name}
            />
          </div>
          <div className={"hidden md:flex flex-col gap-4"}>
            <Heading size={"small"} color={"text-white"}>
              Column 3
            </Heading>
            <FooterList
              renderKey={item => item.path}
              items={[{ name: "Contact Us", path: urlHelpers.contactUrl() }]}
              renderUrl={item => item.path}
              renderTitle={item => item.name}
            />
          </div>
        </Container>
      </footer>
      <div className={"p-4"}>
        <Container
          breakpoint={"lg"}
          className={"justify-between items-center gap-2 flex-col md:flex-row"}
        >
          <div
            className={
              "flex text-center text-xs md:text-sm gap-4 flex-col md:flex-row sm:text-left"
            }
          >
            <Copyright />
            <p className={"flex gap-4 mb-2 md:mb-0"}>
              <a
                className={"hover:underline"}
                href={urlHelpers.termsAndConditionsUrl()}
              >
                Terms &amp; Conditions
              </a>
              <a
                className={"hover:underline"}
                href={urlHelpers.privacyPolicyUrl()}
              >
                Privacy Policy
              </a>
            </p>
          </div>
          <div
            className={
              "flex text-xs md:text-sm text-center gap-4 sm:text-left sm:gap-8"
            }
          >
            <Signature authorName={authorName} authorUrl={authorUrl} />
          </div>
        </Container>
      </div>
    </div>
  )
}
