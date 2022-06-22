import * as React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Hero from "../components/hero"
import Content from "../components/content"
import { graphql, PageProps } from "gatsby"
import { AboutPageQuery } from "../graphql-types"

const AboutPage = ({ data }: PageProps<AboutPageQuery>) => {
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
      <Hero title={title} titleColor={"text-white"} />
      <div className={"flex-grow"}>
        <Container vGap centered>
          <div className={"flex flex-col gap-lg"}>
            <Content html={html} />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AboutPage {
    markdownRemark(frontmatter: { slug: { eq: "about" } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

export default AboutPage
