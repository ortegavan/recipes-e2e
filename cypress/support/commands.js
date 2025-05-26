// Comando para navegar para a página inicial
Cypress.Commands.add('navegarParaHome', () => {
    cy.visit('https://meulivrodereceitas.vercel.app');
    cy.url().should('include', '/home');
});

// Comando para pesquisar receitas
Cypress.Commands.add('pesquisarReceita', (termo) => {
    cy.get('input[placeholder*="Procurar receitas"]').type(termo);
    cy.wait(1000);
    cy.get('.search-result a').click();
});
