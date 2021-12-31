const URL = "http://192.168.0.134:8080";

context("Simon Says game ", () => {
  describe("Layout", () => {
    it("Test if all elements where loaded correctly", () => {
      cy.visit(URL);
    });
  });
});
