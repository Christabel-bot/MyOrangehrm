
// describe('Custom Command Test', () => {
//     it('Custom Command', function () {
//         cy.visit('https://www.demoblaze.com/');
//          cy.clickLink('Samsung galaxy s6');
//          cy.get('.name') .should('have.text','Samsung galaxy s6');
//     });
// });
// /// <reference types="cypress" />

/// <reference types="cypress" />
describe('Custom Command Test', () => {
    it('Custom Command', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
         cy.fixture('Orangehrm').then((data) => {
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();

         cy.clickLink('Dashboard');
         cy.get('.oxd-topbar-header-title') .should('have.text','Dashboard');
         })   
    })
});

