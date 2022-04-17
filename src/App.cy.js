import React from "react";
import { mount } from "@cypress/react";
import App from "./App.js";

describe("<App />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<App />);
    cy.get("a").should(($a) => {
      expect($a).contains("Learn React");
    });
  });
});