import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given ("Im on the login page", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"),
    cy.document().its('readyState').should('eq', 'complete')
})

When ("I set my username and password and press the login button", () => {
    cy.get('form').within(() =>{
        cy.get('input[name="username"]')
        .type('Admin')
        cy.get('input[name="password"]')
        .type('admin123')

        //clicando no botão submit type
        cy.get('button[type="submit"]').click();
    })
})

