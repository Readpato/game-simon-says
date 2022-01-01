/// <reference types="Cypress" />

const URL = "http://192.168.0.134:8080";

context("Simon Says game ", () => {
  before(() => {
    cy.visit(URL);
  });

  describe("Layout", () => {
    it("Test if status bar has loaded correctly", () => {
      cy.get(".status-bar")
        .should("be.visible")
        .should("have.class", "alert-primary");
      cy.get(".status-bar-text").should(
        "have.text",
        "The game hasn't started yet! Press Play!"
      );
    });

    it("Test if round counter has loaded correctly", () => {
      cy.get(".round-counter").should("contain", "Round: #0");
    });

    it("Test if start game button has been loaded correctly", () => {
      cy.get(".start-game-button")
        .should("have.css", "background-color", "rgb(173, 230, 187)")
        .and("contain", "Play!");
    });
  });
});
