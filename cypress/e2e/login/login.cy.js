import data from '../../fixtures/login.json'
describe('Verify Login functionality', () => {

    it.only('Verify Login with Valid creds', () => {
      
        cy.visit(Cypress.env("clienturl"))

        cy.get('input[name="username3"]').type(Cypress.env("username"))
        cy.get('input[placeholder="Password"]').type(Cypress.env("password"))
        cy.get('button[type="submit"]').click()
        //Assertions 

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        //or

        cy.url().should('include', 'web/index.php/dashboard/index')

        //or

        cy.contains('Dashboard').should('be.visible')


    })

    it('Verify login with valid username and Invalid Password', () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type("Admin")
        cy.get('input[placeholder="Password"]').type("fvjdhbfj")
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')


    })

    it('Verify login with invalid username and valid Password', () => {
        

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type("fudbfw")
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')
    })

    it('Verify login with invalid username and invalid Password', () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type("fjbjvb")
        cy.get('input[placeholder="Password"]').type("fvjdhbfj")
        cy.get('button[type="submit"]').click()

        cy.contains('Invalid credentials').should('be.visible')

    })

  })