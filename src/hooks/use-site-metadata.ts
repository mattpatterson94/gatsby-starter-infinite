import { useStaticQuery, graphql } from "gatsby"
import { SiteMetadataQuery } from "../graphql-types"

export default function useSiteMetadata() {
  const { site } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            name
            description
            siteUrl
            contactFormAction
          }
        }
      }
    `
  )
  return site.siteMetadata
}
