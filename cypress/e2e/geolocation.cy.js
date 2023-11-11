/// <reference types="cypress" />

describe('Login', () => {
    beforeEach('Entrar na página de geolocation', () => {
       cy.visit('https://the-internet.herokuapp.com/geolocation')
       cy.title('have.text', 'The Internet')
       cy.get('h3').should('have.text', 'Geolocation')
    })

    it('[GEO-O1] Validar entrar na área segura', ()=> {     
      
       cy.get('h3').should('have.text', 'Geolocation')
       cy.get('button').click()
       cy.get('button').click()
   
    })

})