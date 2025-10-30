/// <reference types="cypress" />

describe('My First Test', function () {

  // If you want clean state per test, visit in beforeEach (recommended)
  beforeEach(function () {
    cy.visit('https://demoblaze.com/index.html')
    
    // If login button appears, perform login. If user already logged in, skip.
    cy.get('body').then($body => {
      const loggedIn = $body.find('#logout2:visible').length > 0
      if (!loggedIn) {
        // Wait for login button to be present and visible, then click
        cy.get('#login2', { timeout: 10000 }).should('be.visible').click()
        
        // Wait for modal fields to appear inside the login dialog
        cy.get('#logInModal', { timeout: 10000 }).should('be.visible') // modal id
        cy.get('#loginusername', { timeout: 10000 }).should('be.visible').clear().type('Dolly52')
        cy.get('#loginpassword').should('be.visible').clear().type('123456')
        cy.get("button[onclick='logIn()']").click()
        
        // Wait until the UI reflects a successful login (nameofuser visible)
        cy.get('#nameofuser', { timeout: 10000 }).should('contain.text', 'Welcome')
      } else {
        // already logged in, ensure welcome text is present
        cy.get('#nameofuser', { timeout: 10000 }).should('contain.text', 'Welcome')
      }
    })
  })

  afterEach(function () {
    // Safe logout: only click if logout is visible
    cy.get('body').then($body => {
      if ($body.find('#logout2:visible').length > 0) {
        cy.get('#logout2').should('be.visible').click()
        // Optional: assert that login button is visible again
        cy.get('#login2', { timeout: 10000 }).should('be.visible')
      } else {
        // no logout button visible — nothing to do
        cy.log('No logout button visible; skipping logout')
      }
    })
  })

  it('Test Case 1 - Samsung', function () {
    // Navigate reliably: ensure product link exists before clicking
    cy.get(".hrefch[href='prod.html?idp_=1']", { timeout: 10000 }).should('be.visible').click()
    cy.get('.name', { timeout: 10000 }).should('have.text', 'Samsung galaxy s6')
  })

  it('Test Case 2 - Nokia', function () {
    cy.get(".hrefch[href='prod.html?idp_=2']", { timeout: 10000 }).should('be.visible').click()
    cy.get('.name', { timeout: 10000 }).should('have.text', 'Nokia lumia 1520')
  })
})
