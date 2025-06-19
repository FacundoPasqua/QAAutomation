Cypress.Commands.add('Autenticar',() => {
   cy.visit('https://endearing-lollipop-19f16d.netlify.app')
   cy.get('[data-cy="nav-autenticacion"]').click()
   cy.get('[data-cy="generate-credentials-btn"]').click()
   cy.get('button[type="submit"]').contains('Login').click()
})
Cypress.Commands.add('Redirigir',() => {
    //cy.visit('https://endearing-lollipop-19f16d.netlify.app')
    cy.get('[data-cy="nav-interacciones-ui"]').click()
    cy.wait(1000)
    })