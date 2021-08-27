// import { ceil } from "cypress/types/lodash"

export class MobilePhoneReplenishment {

    // export const typePhoneNumber = (phoneNumber) => {
    //     cy.get('[data-qa-node="phone-number"]')
    //         .type(phoneNumber)
    // }   --- стрелочная функция

    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeName(firstName,lastName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName) 
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
            .should('have.text', debitAmount)
    }

    checkDebitCurrency(debitCurrency){
        cy.get('[data-qa-node="currency"]')
            // .eq(0)
            .should('contain.text', debitCurrency)
    }

    checkDebitCommission(debitCommission){
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('have.text', debitCommission)
    }

    checkDebitCommissionCurrency(debitCommissionCurrency){
            cy.get('[data-qa-node="commission-currency"]')
            .should('contain.text', debitCommissionCurrency)
    }

}

export const mobileReplenishment = new MobilePhoneReplenishment()    