/// <reference types="cypress" />
describe('DropDown demo', () => {
    it('Select from DropDown', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html');
        cy.wait(5000);
    
            cy.get('.cwf-change-country').click();
        cy.get('#zcf_address_country_1').select('Nigeria').should('have.value', 'Nigeria');
     cy.get('#zcf_address_country_1').select('Mozambique').should('have.value', 'Mozambique');
    cy.get('#zcf_address_country_1').select('Maldives').should('have.value', 'Maldives');


    })
})