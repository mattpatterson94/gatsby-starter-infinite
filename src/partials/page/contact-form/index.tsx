import * as React from "react"
import Form, { FormProps } from "../../../components/form"

interface ContactFormProps extends Omit<FormProps, "children"> {}

export default function ContactForm(props: ContactFormProps) {
  return (
    <Form {...props}>
      {inputClasses => (
        <>
          <input
            name="name"
            type="text"
            placeholder="NAME"
            className={inputClasses}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="EMAIL"
            className={inputClasses}
          />

          <textarea
            name="details"
            rows={5}
            className={inputClasses}
            placeholder="MESSAGE"
            required
          />
        </>
      )}
    </Form>
  )
}
