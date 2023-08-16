describe('Formulário de Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Deve apresentar erro de Campo Nome obrigatório', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('email-input').type('ssmolak@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de nome é obrigatório')
    })

    it('Deve apresentar erro de Campo E-mail obrigatório', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo email é obrigatório')
    })

    it('Deve apresentar erro de Campo Senha obrigatorio', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de senha é obrigatório')
    })
    
    it('Deve apresentar erro de E-mail já cadastrado', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('smolak')
        cy.getByData('email-input').type('sssssssssssss@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','E-mail já cadastrado!')

    })

    it('O Usuário deve conseguir se cadastrar com sucesso', () => {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('smolak')
        cy.getByData('email-input').type('sssssssssssss@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text','Usuário cadastrado com sucesso!')
    })
})