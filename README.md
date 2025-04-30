## Testes E2E aplicados ao My Recipe Book

### Fase 1

1. Inicializar um projeto Node.js:

```
npm init -y
```

2. Instalar o Cypress:

```
npm install cypress --save-dev
```

3. Abrir o Cypress pra gerar a estrutura inicial:

```
npx cypress open
```

4. Criar o primeiro teste em `cypress/e2e/primeiro-teste.cy.js` - visitar a aplicação:

```
describe('Primeiro teste', () => {
  it('Deve visitar a página inicial da aplicação', () => {
    cy.visit('https://meulivrodereceitas.vercel.app/') ;
    cy.url().should('include', '/home');
  });
});
```

5. Executar o teste em modo headless:

```
npx cypress run --spec "cypress/e2e/primeiro-teste.cy.js"

```
