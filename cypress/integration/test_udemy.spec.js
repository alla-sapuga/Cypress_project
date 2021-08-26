/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
// import * as mobileReplenishment from "../support/pages/mobileReplenishment"



it.only ('Replenishment of Ukraine phone number', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    mobileReplenishment.typePhoneNumber('686979712')
    mobileReplenishment.typeAmount('1')
    mobileReplenishment.typeDebitCardData('4552331448138217','0524','111')
    cy.wait(3000)
    mobileReplenishment.typeName('taras','schevchenko')
    cy.wait(4000)
    mobileReplenishment.submitPayment()
    cy.wait(4000)
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1')
    mobileReplenishment.checkDebitCurrency('UAH')
    mobileReplenishment.checkDebitCommission('2')
    mobileReplenishment.checkDebitCommissionCurrency('UAH')
})


it ('Money transfer between foreign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
        .wait(3000)
        .get('[data-qa-node="numberdebitSource"]')
        .type('4552331448138217')

        .get('[data-qa-node="expiredebitSource"]')
        .type('0524')

        .get('[data-qa-node="cvvdebitSource"]')
        .type('111')

        .get('[data-qa-node="firstNamedebitSource"]')
        .type('taras')

        .get('[data-qa-node="lastNamedebitSource"]')
        .type('schevchenko')

        .get('[data-qa-node="numberreceiver"]')
        .type('5309233034765085')
        .get('[data-qa-node="amount"]')
        .type('300')
        .get('[data-qa-node="toggle-comment"]')
        .click()
        .get('[data-qa-node="comment"]')
        .type('Cypress test')
        .get('button[type="submit"]')
        .wait(3000)
        .click()


        .get('[data-qa-node="payer-card"]')
        .should('have.text', '4552 3314 4813 8217')
        .get('[data-qa-node="receiver-card"]')
        .should('have.text', '5309 2330 3476 5085')
        .get('[data-qa-node="payer-amount"]')
        .should('have.text', '300 UAH')
        .get('[data-qa-node="payer-currency"]')
        .should('have.text', '85.30 UAH')
        .get('[data-qa-node="receiver-amount"]')
        .should('have.text', '300 UAH')
        .get('[data-qa-node="receiver-currency"]')
        .should('have.text', '0 UAH')
        .get('[data-qa-node="total"]')
        .find('b')
        .eq(0)
        .should('contain.text', '385.30')
        .get('[data-qa-node="total"]')
        .find('b')
        .eq(1)
        .should('contain.text', 'UAH')
        .get('[data-qa-node="comment"]')
        .should('have.text', 'Cypress test')
})
