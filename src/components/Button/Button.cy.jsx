import React from "react"
import { mount } from "@cypress/react"
import Button from "./Button.jsx"

describe('<Button />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />)
  })
})