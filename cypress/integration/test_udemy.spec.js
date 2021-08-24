it('By ID', () => {
    cy.visit('http://www.facebook.com/')
    cy.get ('#email')
})


it('By Class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get ('.DocSearch')
})

it('By tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
    cy.get ('nav')
})

it('By tag value', () => {
    cy.visit('http://www.facebook.com/')
    cy.get ('[name="pass"]')
})


it('By different tag', () => {
    cy.visit('http://www.facebook.com/')
    cy.get ('[data-testid="royal_login_button"][type="submit"]')
})


it('By different types', () => {
    cy.visit('http://www.facebook.com/')
    cy.get ('a[role="button"][rel="async"]')
})



it.only('By contains name', () => {
    cy.visit('https://next.privat24.ua/').wait(1000)
    cy.get ('*[class^="card"]')
})



it('Using Get with Fond and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open').wait(1000)
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it.only('Using Get with Fond and Eq', () => {
    cy.viewport(1366, 768)
    cy.visit('https://docs.cypress.io/api/commands/get#Selector').wait(1000)
    cy.get('main').find('div').find('nav').find('ul').find('li').find('a').eq(3)
})
