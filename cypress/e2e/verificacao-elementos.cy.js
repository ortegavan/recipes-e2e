describe('Verificação de elementos', () => {
    beforeEach(() => {
        cy.visit('https://meulivrodereceitas.vercel.app/');
    });

    it('Deve verificar se o título da página está presente', () => {
        cy.contains('my recipe book').should('be.visible');
    });

    it('Deve verificar se o menu de navegação está presente', () => {
        cy.contains('a', 'Home').should('be.visible');
        cy.contains('a', 'Minhas receitas').should('be.visible');
        cy.contains('a', 'Meus favoritos').should('be.visible');
        cy.contains('a', 'Minha conta').should('be.visible');
    });

    it('Deve verificar se a barra de pesquisa está presente', () => {
        cy.get('input[placeholder*="Procurar receitas"]').should('be.visible');
    });
});
