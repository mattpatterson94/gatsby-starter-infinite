import * as React from "react"
import useSiteMetadata from "../hooks/use-site-metadata"
import Layout from "../components/layout"
import Container from "../components/container"
import Hero from "../components/hero"
import ContactForm from "../partials/page/contact-form"
import Content from "../components/content"

const ContactUsPage = () => {
  const { contactFormAction, title } = useSiteMetadata()

  return (
    <Layout
      title={"Contact Us"}
      description={`At ${title} we value your feedback. We wish to tailor the site to our users to provide them with the best experience. If you have noticed a bug, or have thought of a cool new feature we should add, please let us know in the form below!`}
      noGap
      className={"bg-white"}
    >
      <Hero title={"Contact Us"} titleColor={"text-white"} />
      <div className={"flex-grow"}>
        <Container vGap centered>
          <div className={"flex flex-col gap-lg"}>
            <Content>
              <p>
                At {title} we value your feedback. We wish to tailor the site to
                our users to provide them with the best experience. If you have
                noticed a bug, or have thought of a cool new feature we should
                add, please let us know in the form below!
              </p>
            </Content>

            <ContactForm action={contactFormAction} />
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default ContactUsPage
