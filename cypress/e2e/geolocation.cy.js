/// <reference types="cypress" />

describe('Geolocation', () => {
    beforeEach('Entrar na página de geolocation', () => {
       cy.visit('https://the-internet.herokuapp.com/geolocation')
       cy.title('have.text', 'The Internet')
       cy.get('h3').should('have.text', 'Geolocation')
    })

    it('[GEO-O1]Validar geolocalização', ()=> {    

       cy.get('h3').should('have.text', 'Geolocation')
       cy.contains('button', 'Where am I').click().click().click()

       cy.contains('#demo', 'Latitude:').should('be.visible')
      //  cy.contains('#demo', '-22.7222668:')
       cy.contains('#demo', 'Longitude:').should('be.visible')
      //  cy.contains('#demo', '-42.9279142:')
       cy.contains('a', 'See it on Google').should('be.visible')

   
    })
})