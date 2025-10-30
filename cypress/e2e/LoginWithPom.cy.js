/// <reference types="cypress" />
  import Login from '../PageObject/LoginPage';
///approach without POM

describe('login to OrangeHRM', () => {
    it('login Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.title().should('eq', 'OrangeHRM');
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit'] ").click();
        cy.get('.oxd-topbar-header-title').should('have.text', 'Dashboard');
    })
})  
    //using POM  
    it.only('login Test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      
        const LoginPage = new Login();
         LoginPage.enterUsername('Admin');
         LoginPage.enterPassword('admin123');
         LoginPage.clickLogin();
         LoginPage.verifylogin('Dashboard');
    })

    it.only('login Test with invalid details', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.title().should('eq', 'OrangeHRM');
        const LoginPage = new Login();
         LoginPage.enterUsername('Adedeyi');
         LoginPage.enterPassword('admin123');
         LoginPage.clickLogin();
         cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', 'Invalid credentials');
    })
//using fixture
    it('login Test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      
    cy.fixture('orangehrm.json').then((data) => {
        const LoginPage = new Login();
         LoginPage.enterUsername(data.username);
         LoginPage.enterPassword(data.password);
         LoginPage.clickLogin();
         LoginPage.verifylogin(data.expectedTitle);
}) 
}) 
   