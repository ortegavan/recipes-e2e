describe('Primeiro teste', () => {
    it('Deve visitar a página inicial da aplicação', () => {
        cy.visit('https://meulivrodereceitas.vercel.app/');
        cy.url().should('include', '/home');
    });
});
