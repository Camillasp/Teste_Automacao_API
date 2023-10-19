/// <reference types="cypress" />

import CadastroPage from '../support/page-objects/cadastro.page'

describe('Funcionalidade Cadastrar Cupom', () => {

    beforeEach(() => {
        cy.visit('carrinho')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)

        })
    });

    it('Deve Inserir Código do Cupom', () => {
        
        let codigo = `codigo ${Math.floor(Math.random() * 100000000)}`

        cy.request({
            method: 'POST',
            url: 'carrinho',
            body: { 
                codigo: codigo
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Código de cupom aplicado com sucesso.')
            cy.log(response.body.authorization)
        })
    });

    it('Deve Cadastrar Cumpom com Campos Obrigatorios', () => {
        
        CadastroPage.editarCadastroCupom()
        cy.cadastrarCupom(codigo, nome, valor, desconto, descricao)
        cy.get('.woocommerce-message').shoul('contain', "Cupom cadastrado com sucesso.")

    }).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body.message).to.equal('Cupom cadastrado com sucesso.')
        cy.log(response.body.authorization)
    })

    });

    it('Deve Validar Mensagem de Erro ao Cadastrar Cupom com Nome Repetido', () => {

        cy.cadastrarCupom('codigo', nome, 'valor', 'desconto', 'descricao')

        }).then((response) => {
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Já existe cadastro com esse nome.')
            cy.log(response.body.authorization)
        })