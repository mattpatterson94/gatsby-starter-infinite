import * as React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Hero from "../components/hero"
import Content from "../components/content"
import { graphql, PageProps } from "gatsby"
import { MarkdownPageQuery } from "../graphql-types"

const MarkdownPage = ({ data }: PageProps<MarkdownPageQuery>) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title, description } = frontmatter

  return (
    <Layout
      title={title}
      description={description}
      noGap
      className={"bg-white"}
    >
      <Hero title={"Contact Us"} titleColor={"text-body"} />
      <div className={"flex-grow"}>
        <Container className={"py-10 justify-center"}>
          <div className={"flex flex-col gap-lg"}>
            <Content html={html} />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MarkdownPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

export default MarkdownPage
