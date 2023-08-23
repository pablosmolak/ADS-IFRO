describe(('Formulário de Login'), () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Deve apresentar erro de Campo E-mail obrigatório', () => {
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo email é obrigatório')
    })

    it('Deve apresentar erro de Campo Senha obrigatório', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('ssmolak@gmail.com')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O campo de senha é obrigatório')
    })

    it('Deve apresentar erro de Campo E-mail Inválido', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('ssmolak@gmail')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text','O email digitado é inválido')
    })

    it('Deve apresentar erro de E-mail ou senha incorretos', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('ssmolak@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.get('span').should('exist').and('have.text','E-mail ou senha incorretos')
    })

    it('O usuário deve Logar com sucesso', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('smolak@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
    })
    
})