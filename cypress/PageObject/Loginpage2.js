class login{

 txtUsername = "input[name='username']";
 txtPassword = "input[name='password']";
 LoginButton = "button[type='submit']";
 DashboardHeader = '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'

enterUsername(username){
    cy.get(this.txtUsername).type(username);
}

enterPassword(password){
    cy.get(this.txtPassword).type(password);
}

clickLogin(){
    cy.get(this.LoginButton).click();
}
    verifylogin(expectedTitle){
        cy.get(this.DashboardHeader).should('have.text', expectedTitle);
    }
}
 export default login;     
     