/// <reference types="cypress" />

describe('Capture Screenshot', function() {
it('Screenshots', function () {
 cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 cy.get("img[alt='company-branding']").screenshot('logo') //screenshot of single element
 cy.screenshot('homepage') //screenshot of full page
    })
});