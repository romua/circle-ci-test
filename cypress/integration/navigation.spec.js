/// <reference types="Cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });
  
  it('cy.go() - go back or forward in the browser\'s history', () => {
    // https://on.cypress.io/go
    
    cy.location('pathname').should('include', 'home');
    
    cy.get('.navigation-center-item')
      .last()
      .click();
    
    cy.location('pathname').should('include', 'dashboard');
    cy.go('back');
    cy.location('pathname').should('not.include', 'dashboard');
    cy.location('pathname').should('include', 'home');
  })
});
