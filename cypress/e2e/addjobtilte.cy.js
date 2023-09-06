import logindata from '../fixtures/login.json'

import addjobtitledata from '../fixtures/addjobtitle.json'

describe('Verify Add Job title functionality', () => {

    it('Verify adding job title valid inputs', () => {
      
        cy.login(logindata.username, logindata.password)

        cy.contains("Admin").click()

        cy.contains('Job').click()

        cy.contains('Job Titles').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(addjobtitledata.jobtitle+r)
        cy.get('textarea[placeholder="Type description here"]').type(addjobtitledata.jobdescription)

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should('be.visible')

    })


    it('Verify Mandotory fields in Add job title page', () => {

        cy.login("Admin", "admin123")
        
        cy.contains("Admin").click()

        cy.contains('Job').click()

        cy.contains('Job Titles').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.get('button[type="submit"]').click()

        cy.contains('Required').should("be.visible")


    })

    it('Verify Mandotory fields in Add job title page', () => {


       
        cy.login("Admin", "admin123")

        cy.contains("Admin").click()

        cy.contains('Job').click()

        cy.contains('Job Titles').click()

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type('khdsbgfiudwhf bsufvhiyf jhgvuywegfu khdsbgfiudwhf bsufvhiyf jhgvuywegfu khdsbgfiudwhf bsufvhiyf jhgvuywegfu')
        
        cy.contains('Should not exceed 100 characters').should('be.visible')


    })

  })