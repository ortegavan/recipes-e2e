describe('Pesquisa de receitas', () => {
    beforeEach(() => {
        cy.visit('https://meulivrodereceitas.vercel.app/');
    });

    it('Deve pesquisar por uma receita existente', () => {
        cy.get('input[placeholder*="Procurar receitas"]').type('macarons');
        cy.wait(1000); // Espera o autocomplete carregar
        cy.get('.search-result a').contains('Macarons').click(); // Clica na sugestão do autocomplete
        cy.get('h1').should('contain', 'Macarons'); // Verifica o título na página de detalhes
    });
});
