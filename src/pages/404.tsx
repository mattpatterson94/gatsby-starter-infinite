import * as React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"
import useSiteMetadata from "../hooks/use-site-metadata"

const NotFoundPage = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flexp-shrink-0 flex justify-center">
          <Link className={"inline-flex"} to="/">
            <span className="sr-only">{siteMetadata.name}</span>
            <Logo alt={siteMetadata.name} width={350} />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-500 uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we could not find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                className={
                  "text-base font-medium text-blue-500 underline hover:text-blue-500"
                }
                to="/"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <a
            href="https://www.mattdoesdev.com"
            className="text-sm font-medium text-gray-500 hover:text-gray-800"
          >
            Contact Support
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default NotFoundPage
