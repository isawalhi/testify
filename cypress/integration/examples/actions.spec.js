/// <reference types="cypress" />

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.document().then((document) => document.head.insertAdjacentHTML('beforeend', '<style>* { font-family: Helvetica !important; } html { overflow-y: hidden; -webkit-font-smoothing: unset; font-smooth: never }</style>'));
  });

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.wait(4000);
    cy.get('.ant-btn').matchImageSnapshot('Landing page button');
    cy.get('.ant-btn').matchImageSnapshot('Landing page button 1');
  });
});
