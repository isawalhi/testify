/// <reference types="cypress" />

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.document().then((document) => document.head.insertAdjacentHTML('beforeend', '<style>html { overflow-y: hidden; -webkit-font-smoothing: none; font-smooth: never } * { font-family: Helvetica !important; text-rendering: geometricprecision !important; }</style>'));
  });

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.wait(4000);
    cy.get('.ant-btn').screenshot();
    cy.get('.ant-btn').matchImageSnapshot('Landing page button');
    cy.get('.ant-btn').matchImageSnapshot('Landing page button 1');
  });
});
