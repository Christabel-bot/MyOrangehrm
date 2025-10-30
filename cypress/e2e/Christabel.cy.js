describe('OrangeHRM Test Suite', function () {

    beforeEach(() => {
        // Runs before each test
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login')
    })

    it('Launch url', function () {
        // The URL visit is already in beforeEach, 
        // so you could just assert here if needed
        cy.url().should('include', 'account/login')
    })

    it('Login', function () {
        // Ensure the email input is visible before typing
        cy.get("#input-email", { timeout: 10000 }).should('be.visible').type('josh5@gmail.com')
        cy.get("#input-password").should('be.visible').type('Josh56')
        cy.get("input[value='Login']").click()
    })
})