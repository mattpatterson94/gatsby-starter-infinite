import * as React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Hero from "../components/hero"
import Heading from "../components/heading"
import Content from "../components/content"
// import { PageProps } from "gatsby"
// import { HomePageQuery } from "../graphql-types"

// export default function IndexPage(props: PageProps<HomePageQuery>) {
export default function IndexPage() {
  return (
    <Layout noGap>
      <Hero
        title={"Hello World"}
        heroImage={"https://placeimg.com/1920/400/animals"}
      />
      <Container vGap centered>
        <div className={"py-md flex flex-col gap-md max-w-2xl"}>
          <Heading>Welcome to My Site!</Heading>
          <Content>
            <p>
              Ipsum sint consequat fugiat tempor aute culpa reprehenderit ea
              anim deserunt ipsum veniam veniam ut culpa. Tempor ad incididunt
              non laborum pariatur culpa deserunt proident et amet. Esse qui
              mollit Lorem laboris. Pariatur in mollit incididunt nulla cillum
              commodo. Aute ea fugiat culpa anim sunt exercitation elit
              proident. Adipisicing excepteur cupidatat magna veniam amet
              deserunt labore. Sit consectetur non voluptate est sit nostrud
              occaecat id reprehenderit aliquip ut nostrud voluptate non
              reprehenderit. Et non cillum nostrud veniam eu ullamco duis
              reprehenderit labore sint magna eiusmod cupidatat. Velit irure
              amet nisi labore aute amet velit officia velit. Ex et laborum
              commodo.
            </p>
          </Content>
        </div>
      </Container>
    </Layout>
  )
}
