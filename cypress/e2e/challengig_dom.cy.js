/// <reference types="cypress" />

describe('Teste de manipulação de Dom', () => {
    beforeEach('Visite a página Challengig Dom', () => {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom') 
        cy.get('h3').should('have.text', 'Challenging DOM')
      })

    it('Clicar no botão Azul', ()=> {     
        cy.get('.button')
        .eq(0)    
        .click()
    })

    it('Clicar no botão Vermelho', ()=> {
        cy.get('.button')
        .eq(1)    
        .click()
    })

    it('Clicar no botão Verde', ()=> {     
        cy.get('.button')
        .eq(2)    
        .click()
    })

    //Pendente
    // it.only('Clicar em todos os botões "edit"', ()=> {     
    //     cy.get('a')
    //     parent()
    //     find('button[href=edit]')
    //     .eq(0)
    //     .click()
    // })

})