/// <reference types="cypress" />

describe('Navigate to specific page', () => {
    it('Navigation',() => {
   cy.visit('https://www.demoblaze.com/') 
   cy.title().should('eq', 'STORE');

   cy.get(".hrefch[href='prod.html?idp_=1']").click();
   cy.get('.name').should('have.text','Samsung galaxy s6',);

    cy.go('back');
      cy.title().should('eq', 'STORE');

cy.go('forward');
   cy.get('.name').should('have.text','Samsung galaxy s6',);

cy.reload(); 

    })
});


