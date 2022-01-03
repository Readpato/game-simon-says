/// <reference types="Cypress" />

const URL = "http://192.168.1.5:8080";

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

    it("Test if the box colors have been loaded correctly", () => {
      cy.get(".color-box")
        .eq(0)
        .should("have.css", "background-color", "rgb(237, 92, 78)");
      cy.get(".color-box")
        .eq(1)
        .should("have.css", "background-color", "rgb(78, 237, 172)");
      cy.get(".color-box")
        .eq(2)
        .should("have.css", "background-color", "rgb(78, 144, 237)");
      cy.get(".color-box")
        .eq(3)
        .should("have.css", "background-color", "rgb(237, 228, 78)");
    });
  });
});
