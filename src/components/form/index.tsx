import * as React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { buttonClasses, themes, hoverThemes } from "../button"
import classNames from "classnames"

export interface FormProps
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "children"> {
  children: (inputClasses: string) => React.ReactElement
}

export default function Form({ children, ...props }: FormProps) {
  const inputClasses =
    "transition-colors focus:border-primary focus:ring-transparent outline-none placeholder-body pb-2 border-b-2 border-body"

  const [sending, setSending] = React.useState<boolean>(false)
  const [sent, setSent] = React.useState<boolean>(false)
  const [formMessage, setFormMessage] = React.useState<string>("")
  const form = React.useRef<HTMLFormElement>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    setSending(true)

    const formData = new FormData(form.current!)
    const xhr = new XMLHttpRequest()

    xhr.open("POST", form.current?.action!, true)

    xhr.onload = function () {
      if (xhr.status === 200) {
        setFormMessage("Your submission was sent! Thank you.")
        form.current?.reset()
        setSent(true)
        setSending(false)
      } else {
        setSent(false)
        setSending(false)
        setFormMessage(
          "There was an error sending your message. Please try again later"
        )
      }
    }

    xhr.send(formData)
  }

  return !sent ? (
    <form
      {...props}
      ref={form}
      onSubmit={handleSubmit}
      className={classNames("flex flex-col gap-lg", props.className)}
    >
      <input
        name="subject"
        size={40}
        className="hidden"
        id="subject"
        aria-invalid="false"
      />

      {children?.(inputClasses)}

      <div className="m-auto">
        <ReCAPTCHA
          sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"
          theme="light"
        />
      </div>

      <div className={"m-auto"}>
        <input
          type="submit"
          className={classNames(
            buttonClasses,
            themes["dark-outline"],
            hoverThemes.dark,
            "cursor-pointer"
          )}
          value={sending ? "Sending..." : "Send"}
        />
      </div>

      {formMessage && <p>{formMessage}</p>}
    </form>
  ) : (
    <div>
      <p className={"font-semibold"}>{formMessage}</p>
    </div>
  )
}
