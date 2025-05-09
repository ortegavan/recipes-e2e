describe('Navegação entre páginas', () => {
    beforeEach(() => {
        cy.visit('https://meulivrodereceitas.vercel.app/');
    });

    it('Deve navegar para a página de login ao clicar em Minhas receitas', () => {
        cy.contains('a', 'Minhas receitas').click();
        cy.url().should('include', '/login');
        cy.contains('Bem-vindo(a) de volta!').should('be.visible');
    });

    it('Deve navegar para a página de login ao clicar em Meus favoritos', () => {
        cy.contains('a', 'Meus favoritos').click();
        cy.url().should('include', '/login');
    });

    it('Deve navegar para a página de login ao clicar em Minha conta', () => {
        cy.contains('a', 'Minha conta').click();
        cy.url().should('include', '/login');
    });
});
