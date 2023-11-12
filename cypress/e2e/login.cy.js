/// <reference types="cypress" />

describe('Login', () => {
     beforeEach('Entrar na página de login', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.title('have.text', 'The Internet')
        cy.get('h2').should('have.text', 'Login Page')
     })

     it('[ATH-O1] Validar entrar na área segura', ()=> {     
       
        cy.submitUsernamePassword('tomsmith', 'SuperSecretPassword!')

        cy.get('#flash').should('be.visible', 'You logged into a secure area!')
      })

    it('[ATH-O2] Validar nome do usuário inválido', ()=> {     
 
        cy.submitUsernamePassword('tomsmiti', 'SuperSecretPassword!')

        cy.get('#flash').should('be.visible', 'Your username is invalid!')
     })

      it('[ATH-O3] Validar senha inválida', ()=> {     
       
         cy.submitUsernamePassword('tomsmith', 'SuperSecretPassword')
   
         cy.get('#flash').should('be.visible', 'Your password is invalid!')
      })

      it('[ATH-O4] Validar saída da área segura', ()=> {     
       
         cy.submitUsernamePassword('tomsmith', 'SuperSecretPassword!')
   
         cy.get('#flash').should('be.visible', 'You logged into a secure area!')

         cy.contains('a', 'Logout').click()

         cy.get('#flash').should('be.visible', 'You logged out of the secure area!')
      })
})