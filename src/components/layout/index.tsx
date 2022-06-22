import * as React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../../hooks/use-site-metadata"
import ogImageDefault from "../../images/og-image.png"
import Footer from "../../partials/layout/footer"
import HeaderBar from "../header-bar"
import classNames from "classnames"

type LayoutProps = {
  className?: string
  title?: string
  description?: string
  ogType?: string
  ogImage?: string
  ogPrice?: string
  ogPriceCurrency?: string
  ogImageHeight?: string
  ogImageWidth?: string
  noGap?: boolean
  children: React.ReactNode
}

export default function Layout({
  children,
  title,
  description,
  ogImage,
  ogType = "website",
  ogImageWidth = "1200",
  ogImageHeight = "600",
  noGap,
  className,
}: LayoutProps) {
  const metadata = useSiteMetadata()

  return (
    <>
      <Helmet htmlAttributes={{ class: "scroll-smooth" }}>
        <meta charSet="utf-8" />
        <title>{title ? `${title} | ${metadata.title}` : metadata.title}</title>
        <meta
          name="description"
          content={description ?? metadata.description}
        />
        <meta property="og:image" content={ogImage ?? ogImageDefault} />
        <meta property="og:image:height" content={ogImageHeight} />
        <meta property="og:image:width" content={ogImageWidth} />
        <meta property="og:type" content={ogType} />
        <link rel="canonical" href={metadata.siteUrl} />
        <meta name="twitter:title" content={title ?? metadata.title} />
        <meta
          name="twitter:description"
          content={description ?? metadata.description}
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div
        className={
          "layout bg-fixed bg-center flex min-h-screen bg-cover relative flex-col justify-between"
        }
      >
        <main id="main" className={"bg-gray-100 flex flex-col flex-grow"}>
          <HeaderBar />
          <div
            className={classNames(className, "flex-grow", {
              "md:py-10": !noGap,
            })}
          >
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
