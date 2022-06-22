import * as React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"
import useSiteMetadata from "../hooks/use-site-metadata"

export default function NotFoundPage() {
  const { name, authorUrl } = useSiteMetadata()

  return (
    <div className="min-h-screen p-xl flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-md lg:px-lg">
        <div className="flex-shrink-0 flex justify-center">
          <Link className={"inline-flex"} to="/">
            <span className="sr-only">{name}</span>
            <Logo alt={name} width={350} />
          </Link>
        </div>
        <div className="py-xl">
          <div className="text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-sm text-4xl font-extrabold text-body tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-sm text-base text-light">
              Sorry, we could not find the page you’re looking for.
            </p>
            <div className="mt-md">
              <Link
                className={
                  "text-base font-medium text-primary underline hover:text-primary"
                }
                to="/"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-md lg:px-lg">
        <nav className="flex justify-center space-x-md">
          <a
            href={authorUrl}
            className="text-sm font-medium text-light hover:text-body"
          >
            Contact Support
          </a>
        </nav>
      </footer>
    </div>
  )
}
