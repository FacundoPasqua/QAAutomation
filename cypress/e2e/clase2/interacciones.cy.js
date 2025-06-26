
describe('Interacciones UI',  () => {

  it('Submit sin datos', () => {
      
  } )
  it('Password Incorrecta', () => {
  const shortPassword = '12';
  cy.get('[data-cy="password-input"]').type(shortPassword)
  cy.get('[data-cy="submit-button"]').click()
  cy.get('[data-cy="password-error"]').contains('Password must be at least 6 characters')

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