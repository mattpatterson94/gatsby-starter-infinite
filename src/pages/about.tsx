import * as React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Hero from "../components/hero"
import Content from "../components/content"

const ContactUsPage = () => {
  return (
    <Layout title={"About"} noGap className={"bg-white"}>
      <Hero title={"About"} titleColor={"text-white"} />
      <div className={"flex-grow"}>
        <Container vGap centered>
          <div className={"flex flex-col gap-lg"}>
            <Content>
              <h1>Hello</h1>
              <p>
                Esse cupidatat ea do aliquip dolore qui enim. Ea qui ex pariatur
                elit tempor officia quis aute cillum cillum nostrud cillum irure
                sint. Aliqua amet minim irure sunt et enim. Dolor consequat
                aliqua anim voluptate non nulla velit ipsum magna esse voluptate
                fugiat. Pariatur est aliqua magna. Anim est proident aliqua
                velit nostrud culpa. Reprehenderit est consequat anim esse.
                Culpa occaecat consequat id ut duis sunt minim. Commodo id
                labore nostrud nisi nulla sint mollit sit ipsum amet qui labore
                duis esse. Irure incididunt irure occaecat.
              </p>

              <h2>World</h2>

              <p>
                Esse cupidatat ea do aliquip dolore qui enim. Ea qui ex pariatur
                elit tempor officia quis aute cillum cillum nostrud cillum irure
                sint. Aliqua amet minim irure sunt et enim. Dolor consequat
                aliqua anim voluptate non nulla velit ipsum magna esse voluptate
                fugiat. Pariatur est aliqua magna. Anim est proident aliqua
                velit nostrud culpa. Reprehenderit est consequat anim esse.
                Culpa occaecat consequat id ut duis sunt minim. Commodo id
                labore nostrud nisi nulla sint mollit sit ipsum amet qui labore
                duis esse. Irure incididunt irure occaecat.
              </p>

              <p>
                <a href={"https://example.com"}>Read More</a>
              </p>
            </Content>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default ContactUsPage
