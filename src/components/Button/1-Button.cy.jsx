import React from "react";
import { mount } from "@cypress/react";
import Button from "./Button.jsx";

describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});
describe("<Button />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("checks default visibility", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("display", "block");
    });
  });
  it("checks css background color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("background-color", "rgb(112, 137, 65)");
    });
  });
  it("check border color", () => {
    // see: https://on.cypress.io/component-testing
    mount(<Button />);
    cy.get("button").should(($btn) => {
      expect($btn).to.have.css("border-color", "rgba(0, 0, 0, 0)");
    });
  });
});