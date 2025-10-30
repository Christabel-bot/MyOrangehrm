/// <reference types="cypress" />

describe('Fixture demo', () => {
    it('Use Fixture data in test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.fixture('Orangehrm').then((data) => {
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();
            
            cy.title().should('eq', data.expectedTitle);
        });
    });
});
