/// <reference types="cypress" />


describe('The Home Page Paymi', () => {
    beforeEach(() => {
        cy.visit('https://staging.paymi.com/')
    })

    const username = 'maribard' + Cypress._.uniqueId() + Cypress._.random(9999) + '@gmail.com'
    const password = 'ababABAB6'
    
    const username_2 = 'maribard' + Cypress._.random(9999) + '@gmail.com'
    const password_fail = 'ababABAB'

    it('Registration user', () => {
        cy.get(':nth-child(2) > .text-link').click()
        cy.fill_form(username, password)
        cy.get('#terms-label').click()
        cy.get('.btn').click()
        cy.get('.dropdown-toggle').should('be.visible')
    })

    it('Registration user fail pass', () => {
        cy.get(':nth-child(2) > .text-link').click()
        cy.fill_form(username_2, password_fail)
        cy.get('#terms-label').click()
        cy.get('.btn').click()
        cy.get('.error-text').should('be.visible')

    })

    it('Login user success', () => {
        cy.fill_form(username, password)
        cy.get('#log_in').click()
        cy.get('.dropdown-toggle').should('be.visible')
    })
})    