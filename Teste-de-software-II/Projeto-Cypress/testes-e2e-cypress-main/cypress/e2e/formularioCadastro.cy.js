describe('Formulário de Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('O Usuário deve conseguir se cadastrar com sucesso!', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('smolak')
        cy.getByData('email-input').type('smolak1fff14@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text','Usuário cadastrado com sucesso!')

  })
})