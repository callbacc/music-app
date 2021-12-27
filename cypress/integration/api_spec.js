xdescribe("seach endpoint", () => {
  it("responds", () => {
    cy.request("/api/search?q=hello").then((response) => {
      expect(response.body).to.exist;
      expect(response.status).to.equal(200);
    });
  });
});

xdescribe("env endpoint", () => {
  it("responds", () => {
    cy.request("/api/env").then((response) => {
      expect(response.body).to.exist;
      expect(response.status).to.equal(200);
    });
  });
});
