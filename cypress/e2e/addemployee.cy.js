describe('Verify add employee functionality', () => {

    it('Verify add employee with valid details', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('input[name="username"]').type(`Admin`)
        cy.get('input[placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        //Assertions 

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        //or

        cy.url().should('include', 'web/index.php/dashboard/index')

        //or

        cy.contains('Dashboard').should('be.visible')

        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('input[name="firstName"]').type("Ravikumar")

        cy.get('input[name="lastName"]').type("M")

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should('be.visible')


    })


})