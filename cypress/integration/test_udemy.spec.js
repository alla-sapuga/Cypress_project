/// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers"

// import * as mobileReplenishment from "../support/pages/mobileReplenishment"



it ('Replenishment of Ukraine phone number', () => {
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


it.only ('Money transfer between foreign cards', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
    cy.wait(3000)

    transfers.typeDebitCardData('4552331448138217','0524','111')
    transfers.typeDebitName('taras','schevchenko')
    transfers.typeReceiverCard('5309233034765085')
    transfers.typeAmount('300')
    transfers.typeComment('Cypress test')
    cy.wait(3000)
    transfers.submitPayment()

    transfers.checkPayerAndReceiverCard('4552 3314 4813 8217','5309 2330 3476 5085')
    transfers.checkPayerAmount('300 UAH')
    transfers.checkPayerComission('85.73 UAH')
    transfers.checkRecieverAmount('300 UAH')
    transfers.checkRecieverCurrency('0 UAH')
    transfers.checkTotal('385.73','UAH')
    transfers.checkComment('Cypress test')
})
