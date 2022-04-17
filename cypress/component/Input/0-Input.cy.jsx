import React from "react";
import { mount } from "@cypress/react";
import Input from "../../../src/components/Input/Input.jsx";

describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});
describe("<Input />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").type("hey");
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("background-color", "rgba(0, 0, 0, 0)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Input />);
    cy.get("input").should(($input) => {
      expect($input).to.have.css("border-color", "rgb(118, 118, 118)");
    });
  });
});