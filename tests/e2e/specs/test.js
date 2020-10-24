// https://docs.cypress.io/api/introduction/api.html

describe('Should contain links to subcategories', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('a', 'Headlines')
    cy.contains('a', 'Cricket')
  })
})

describe('Should load atleast one article when click on cricket', () => {
  it('Visits the app root url', () => {
    cy.visit('/cricket')
    cy.wait(2000)
    cy.get('.articles').get('.article').should('have.length.at.least', 1);
  })
})

