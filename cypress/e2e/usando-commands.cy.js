describe('Usando comandos personalizados', () => {
    beforeEach(() => {
        cy.navegarParaHome();
    });

    it('Deve pesquisar por uma receita usando comando personalizado', () => {
        cy.pesquisarReceita('macarons');
        cy.contains('Macarons').should('be.visible');
    });
});
