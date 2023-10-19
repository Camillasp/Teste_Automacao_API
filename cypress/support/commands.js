// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()

})

Cypress.Commands.add('Cadastro', (codigo, valor, desconto, descricao) => {
    cy.get('#reg_nome').type(nome)
    cy.get('#reg_codigo').type(codigo)
    cy.get('#reg_valor').type(valor)
    cy.get('#reg_desconto').type(desconto)
    cy.get('#reg_descrição').type(descricao)
    cy.get(':nth-child(4) > .button').click()

})

Cypress.Commands.add('Cadastrar Cupom', (codigo, nome, valor, desconto, descricao) => {
    cy.request({
        method: 'POST',
        url: 'coupons',
        headers: {autorizathion: id},
        body: {
        "codigo do cupom": codigo,
        "nome": nome,
        "valor": valor,
        "desconto": desconto,
        "descricao": descricao
        },
        failOnStatusCode: false

    })

})

Cypress.Commands.add('Identificacao',(email, senha) => {
    cy.request({
        method: 'POST',
        url: 'coupons',
        body: {
            "email": email,
            "password": senha
        }
    }).then((response) => {
        expect(response.status).to.qual(200)
        return response.body.authorization
    })
})