import * as React from "react"
import classNames from "classnames"

interface RightEl extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

interface InputGroupProps {
  className?: string
  input: React.InputHTMLAttributes<HTMLInputElement>
  left?: {
    el: React.ReactElement
  }
  right?: RightEl
}

export default function InputGroup({
  className,
  left,
  input,
  right,
}: InputGroupProps) {
  return (
    <div className={classNames("flex rounded-md shadow-sm", className)}>
      <div className="relative flex items-stretch flex-grow focus-within:z-10">
        {left && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {left.el}
          </div>
        )}
        <input
          {...input}
          className={classNames(
            "focus:ring-body focus:border-body block w-full rounded-none rounded-l-md border-gray-300",
            input.className,
            { "pl-10": !!left },
            { "rounded-r-md": !right }
          )}
        />
      </div>
      {right && (
        <button
          type="button"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-body bg-gray-50 disabled:bg-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-body focus:border-body"
          {...right}
        >
          {right.children}
          {right.label && <span>{right.label}</span>}
        </button>
      )}
    </div>
  )
}
