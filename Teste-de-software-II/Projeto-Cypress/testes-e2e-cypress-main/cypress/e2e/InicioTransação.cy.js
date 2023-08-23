describe(('Formulário de Login'), () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('O usuário deve Logar na aplicação, realizar uma transferencia e fazer logout', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('smolak@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.location('pathname').should('eq', '/home')
        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('90')
        cy.getByData('realiza-transacao').click()
        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 90')
        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq', '/')
    })

    it('O  usuário deve Logar na aplicação, realizar um deposito e fazer logout', () => {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('smolak@gmail.com')
        cy.getByData('senha-input').type('12345678')
        cy.getByData('botao-enviar').click()
        cy.location('pathname').should('eq', '/home')
        cy.getByData('select-opcoes').select('Depósito')
        cy.getByData('form-input').type('90')
        cy.getByData('realiza-transacao').click()
        cy.getByData('lista-transacoes').find('li').last().contains('R$ 90')
        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq', '/')


    })
})