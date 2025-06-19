
describe('Interacciones UI',  () => {

  it('Submit sin datos', () => {
      cy.visit('https://endearing-lollipop-19f16d.netlify.app')
    cy.get('[data-cy="nav-interacciones-ui"]').click()
    cy.get('[data-cy="submit-button"]').click()
    cy.wait(300)
    cy.get('[data-cy="username-error"]').contains('Username is required')
    cy.get('[data-cy="email-error"]').contains('Email is required')
    cy.get('[data-cy="password-error"]').contains('Password is required')
    cy.get('[data-cy="role-error"]').contains('Please select a role')
    cy.get('[data-cy="terms-error"]').contains('You must accept the terms') 
  } )
  it('Password Incorrecta', () => {
  const shortPassword = '123';
  cy.get('[data-cy="password-input"]').type(shortPassword)
  cy.get('[data-cy="submit-button"]').click()
  cy.get('[data-cy="password-error"]').contains('Password must be at least 6 characters')
  const passA = '123456';
  const passB = '123457';
  cy.get('[data-cy="password-input"]').clear().type(passA)
  cy.get('[data-cy="confirm-password-input"]').type(passB)
  cy.get('[data-cy="submit-button"]').click()
  cy.get('[data-cy="confirm-password-error"]').contains('Passwords do not match')

}) 
  it.skip('Test Username', () => {
    const longUsername = 'Estoy testeando la longitud del campo'.repeat(1);
    cy.get('[data-cy="username-input"]').type(longUsername)
  })

  it.skip('Test Email Incorrecto', () => {
  const mailWithoutAt = 'testemail.com';
  const mailWithoutDot = 'testemail@com';
  const mailWithSpaces = 'test   prueba  @ema    il.com';
  const mailWithTwoAt = 'test@@email.com';  
  cy.log('Primer validación de Gepeto')
  
  cy.get('[data-cy="email-input"]').type(mailWithoutAt)
  cy.get('[data-cy="submit-button"]').click()
  cy.get('[data-cy="email-input"]')
  cy.get('[data-cy="email-input"]').then(($input) => {
  const message = $input[0].validationMessage
  expect(message).to.include("include an '@' in the email address")
  
  cy.log('email sin .')
  cy.get('[data-cy="email-input"]').clear()
  cy.get('[data-cy="email-input"]').type(mailWithoutDot)
  cy.get('[data-cy="submit-button"]').click()
  cy.get('[data-cy="email-error"]').contains('Email is invalid')  

  cy.log('email con 2 @')
  cy.get('[data-cy="email-input"]').clear()
  cy.get('[data-cy="email-input"]').type(mailWithTwoAt)
  cy.get('[data-cy="submit-button"]').click()
  cy.get('[data-cy="email-error"]').contains('Email is invalid')  

})



}) 

}) 