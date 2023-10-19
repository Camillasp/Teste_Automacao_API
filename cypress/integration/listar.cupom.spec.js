/// <reference types="cypress" />

const dadosCadastro = require('../fixtures/cadastro.json')

context('Funcionalidade de Listar Cupom', () => {
    let id
    before(() => {
        cy.ID('aluno_ebac@teste.com', 'teste').then(Identificacao => { Identificacao= id })

    });

    it('Deve listar todos os cupons cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'coupons',
            headers: {
                authorization: 'jogfODIlXsqxNFS2'
            }

        }).should((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })

    });

    it('Deve Listar Cupons Cadastrados - Usando Arquivos de Dados')
    CadastroPage.editarCadastroCupom(
        dadosCadastro[0].nome,
        dadosCadastro[0].codigo,
        dadosCadastro[0].valor,
        dadosCadastro[0].desconto,
        dadosCadastro[0].descricao
    )
    cy.get('.woocommerce-message').shoul('contain', "Cupom cadastrado com sucesso.")


    it('Deve Listar Cupons Cadastrados - Buscando por ID')
    cy.request({
        method: 'GET',
        url: 'coupons',
        body: {
            _id: 'K6leHdftCeOJj8BJ'
        }

    }).should((response) => {
        expect(response.status).to.qual(200)
        return response.body.authorization

    })

})