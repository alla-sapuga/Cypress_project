/// <reference types="Cypress" />

it('General search', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign in')
})

it('Using tag', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('div','Sign in')
})

it('Ignoring case', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.contains('Sign In', {matchCase: false})
})

it.only('Ignoring case', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('footer').contains('Regulations and tariffs', {matchCase: false})
})