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

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typeName(firstName,lastName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName) 
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
            .click()
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