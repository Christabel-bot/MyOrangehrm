class login{

enterUsername(username){
    cy.get("input[name='username']").type(username);
}

enterPassword(password){
    cy.get("input[name='password']").type(password);
}

clickLogin(){
    cy.get("button[type='submit']").click();
}
    verifylogin(expectedTitle){
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', expectedTitle);
    }
}
 export default login;     
     
