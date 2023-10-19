/// <reference types="cypress" />

describe('Deve fazer Login com sucesso', () => {

    cy.request({
        method: 'POST',
        url: 'login',
        body: {
            "email": "aluno_ebac@teste.com",
            "password": "teste"
        }

    }).then((response) => {
        expect(response.status).to.qual(200)
        expect(response.body.message).to.equal('Login realizado com sucesso')
        cy.log(response.body.authorization)
    })
    
});