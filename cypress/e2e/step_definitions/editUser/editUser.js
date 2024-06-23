import { Given, Before } from 'cypress-cucumber-preprocessor/steps'

Before ( () => {
    // Pré-requisito para  aexecução da feature
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.document().its('readyState').should('eq', 'complete')

    //Insere nome e senha
    cy.get('input[name="username"]')
        .type('Admin')
        cy.get('input[name="password"]')
        .type('admin123')

    //Pressiona o botão "Login"
    cy.get('button[type="submit"]').click()

})

Given("The admin screem is accessed", () => {
    //Agurdando carregamento da página concluir
    cy.document().its('readyState').should('eq', 'complete')

    //Selecionando item do menu desejado (Admin)
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.document().its('readyState').should('eq', 'complete')
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click()
})



When ("I modify username and change the password", () => {
    
    //Modificando usuário 

    cy.get(':nth-child(2) > .oxd-input').clear()
    .type('Complete name of employee')

    //Marcando como check o change password
    cy.get('.oxd-checkbox-input > .oxd-icon').click();
    cy.get('label > input').check();

    //Inserindo senha e confirmação de senha
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('NewPasswd123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('NewPasswd123')

    // Pressionando o botão Save
    cy.get('.oxd-button--secondary').click()
 })



