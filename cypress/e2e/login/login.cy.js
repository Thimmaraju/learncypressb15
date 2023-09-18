import data from '../../fixtures/login.json'
describe("Verify Login functionality", () => {

    var username = "Admin"
    var password = "admin123"

   

    it.only('Verify Login with Valid creds', () => {
        let creds = {

            username: "Admin",
            password: "admin123"
        }
        var menuitems = {

            menu1 : "Admin",
            menu2 : "PIM",
            menu3 : "Leave",
            menu4 : "Time",
            menu5 : "Recruitment",
            menu6 : "Dashboard"
        
        }


        var modules = ["Admin", "PIM","Leave", "Time","Recruitment", "Dashboard"]
        cy.visit(Cypress.env("clienturl"))

        cy.get('input[name="username"]').type(creds.username)
        cy.get('input[placeholder="Password"]').type(creds.password)
        cy.get('button[type="submit"]').click()
        //Assertions 

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

        //or

        cy.url().should('include', 'web/index.php/dashboard/index')

        //or
    //    for (let item in menuitems){

    //     cy.contains(menuitems[item]).should('be.visible')
    //    }
     
        for (let i of modules){

            cy.contains(i).should('be.visible')
        }


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