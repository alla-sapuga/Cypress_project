/// <reference types="Cypress" />

import { contextType } from "react-bootstrap/lib/Accordion"

const logGroup = '[data-cy="LogGroup"]'

describe('The Home Page', () => {
    it('Successfully loads', () => {
      cy.visit('http://localhost:3000') 
    })
})

describe('Log in checking', () => {   
     
  context('Unsuccessful login', () => {

    it('Input only email', () => {
      cy.get(`${logGroup} [data-cy="btn-login"]`).click().wait(1000)
      cy.get('input[type="email"]').type('alla@mail.com').wait(1000)
      cy.get('.btn').contains('Log In').click().wait(1000)      
      cy.get('span.logGroup__help-title.help-block')
        .should('have.text', 'Enter your password')
      cy.get('.btn').contains('Close').click()
    })

    it('Input only password', () => {
      cy.get(`${logGroup} [data-cy="btn-login"]`).click().wait(1000)
      cy.get('input[type="password"]').type('sergrwtyy').wait(1000)
      cy.get('.btn').contains('Log In').click().wait(1000)      
      cy.get('span.logGroup__help-title.help-block')
        .should('have.text', 'Enter your email')
      cy.get('.btn').contains('Close').click()
    })

    it('Input incorrect email', () => {
      cy.get(`${logGroup} [data-cy="btn-login"]`).click().wait(1000)
      cy.get('input[type="email"]').type('alla@dunice.net').wait(1000)
      cy.get('input[type="password"]').type('123456').wait(1000)
      cy.get('.btn').contains('Log In').click().wait(1000)  
      cy.get('span.logGroup__help-title.help-block')
        .should('have.text', 'No user with this email')
      cy.get('.btn').contains('Close').click()    
    })
    
    it('Input incorrect password', () => {
      cy.get(`${logGroup} [data-cy="btn-login"]`).click().wait(1000)
      cy.get('input[type="email"]').type('alla.sapuga@dunice.net').wait(1000)
      cy.get('input[type="password"]').type('123456789').wait(1000)
      cy.get('.btn').contains('Log In').click().wait(1000)  
      cy.get('span.logGroup__help-title.help-block')
        .should('have.text', 'Wrong password')
      cy.get('.btn').contains('Close').click()    
    })

  })

  context('Successful login', () => {

    it('Input all', () => {
      cy.get(`${logGroup} [data-cy="btn-login"]`).click().wait(1000)
      cy.get('input[type="email"]').type('alla.sapuga@dunice.net').wait(1000)
      cy.get('input[type="password"]').type('123456').wait(1000)
      cy.get('.btn').contains('Log In').click().wait(3000)      
    })

  })  

  context('Successful logout', () => {
    it('Log out', () => {
      cy.get('.btn').contains('Log-out').click()     
    })
  })



  
    // it('Register click', () => {
    //     cy.get('[data-cy="login-btn"]').click()
    // })
    // it('successfully loads', () => {
    //     cy.visit('http://localhost:3000') 
    // })

    // it('successfully loads', () => {
    //     cy.visit('http://localhost:3000') 
    //   })

    // it('successfully loads', () => {
    //     cy.visit('http://localhost:3000') 
    // })  


})