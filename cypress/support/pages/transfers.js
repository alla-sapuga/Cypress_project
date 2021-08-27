export class Transfers {

    typeDebitCardData(cardNumber,expDate,cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(expDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
    }

    typeDebitName(firstName,lastName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName) 
    }

    typeReceiverCard(card){
        cy.get('[data-qa-node="numberreceiver"]')
            .type(card)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeComment(comment){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
            .get('[data-qa-node="comment"]')
            .type(comment)
    }

    submitPayment(){
        cy.get('button[type="submit"]')
            .click()
    }

    checkPayerAndReceiverCard(payerCard,receiverCard){
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', payerCard)
            .get('[data-qa-node="receiver-card"]')
            .should('have.text', receiverCard)
    }

    checkPayerAmount(amount){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', amount)
    }

    checkPayerComission(currency){
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', currency)
    }

    checkRecieverAmount(amount){
        cy.get('[data-qa-node="receiver-amount"]')
            .should('have.text', amount)
    }

    checkRecieverCurrency(currency){
        cy.get('[data-qa-node="receiver-currency"]')
            .should('have.text', currency)
    }

    checkTotal(amount,currency){
        cy.get('[data-qa-node="total"]')
            .find('b')
            .eq(0)
            .should('contain.text', amount)

            .get('[data-qa-node="total"]')
            .find('b')
            .eq(1)
            .should('contain.text', currency)
    }

    checkComment(comment){
        cy.get('[data-qa-node="comment"]')
            .should('have.text', comment)
    }



}

export const transfers = new Transfers()    