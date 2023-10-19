class CadastroPage {

    editarCadastroCupom(codigo, valor, desconto, descricao) {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-cupom > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        
        cy.get('#billing_codigo').clear().type(codigo)
        cy.get('#billing_valor').clear().type(valor)
        cy.get('#select2-billing_country-container').click().type(desconto).get('[aria-selected="true"]').click()
        cy.get('#billing_descricao').clear().type(descricao)
        
        cy.get('.button').click()

    }

}

export default new CadastroPage()