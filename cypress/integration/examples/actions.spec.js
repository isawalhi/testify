/// <reference types="cypress" />

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.wait(4000);
    cy.get('.ant-btn').matchImageSnapshot("Test");
  })
})
