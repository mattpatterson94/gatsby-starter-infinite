import * as React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Hero from "../components/hero"
import Content from "../components/content"
import { graphql, PageProps } from "gatsby"
import { HomePageQuery } from "../graphql-types"

export default function IndexPage({ data }: PageProps<HomePageQuery>) {
  const {
    frontmatter: { title, description },
    html,
  } = data.markdownRemark
  return (
    <Layout description={description} noGap>
      <Hero title={title} heroImage={"https://placeimg.com/1920/400/animals"} />
      <Container vGap centered>
        <div className={"py-md flex flex-col gap-md max-w-2xl"}>
          <Content html={html} />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    markdownRemark(frontmatter: { internal__id: { eq: "home" } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
