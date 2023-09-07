describe('Verify Search functionality', () => {
  it('Verify user can search in google', () => {
    cy.visit('https://www.google.com/')

    cy.get('textarea[aria-label="Search"]').type("Tajmahal{enter}")
  })
})