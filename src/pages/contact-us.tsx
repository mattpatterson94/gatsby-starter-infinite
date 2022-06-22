import * as React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"
import Layout from "../components/layout"
import Container from "../components/container"
import Hero from "../components/hero"
import ContactForm from "../partials/page/contact-form"
import Content from "../components/content"
import { graphql, PageProps } from "gatsby"
import { ContactUsPageQuery } from "../graphql-types"

export default function ContactUsPage({ data }: PageProps<ContactUsPageQuery>) {
  const { contactFormAction } = useSiteMetadata()
  const {
    frontmatter: { title, description },
    html,
  } = data.markdownRemark

  return (
    <Layout
      title={title}
      description={description}
      noGap
      className={"bg-white"}
    >
      <Hero title={"Contact Us"} />
      <div className={"flex-grow"}>
        <Container vGap centered>
          <div className={"flex flex-col gap-lg"}>
            <Content html={html} />
            <ContactForm action={contactFormAction} />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContactUsPage {
    markdownRemark(frontmatter: { internal__id: { eq: "contact" } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
