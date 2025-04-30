## Testes E2E aplicados ao My Recipe Book

### Fase 1

1. Inicializar um projeto Node.js:

```bash
npm init -y
```

2. Instalar o Cypress:

```bash
npm install cypress --save-dev
```

3. Abrir o Cypress pra gerar a estrutura inicial:

```bash
npx cypress open
```

4. Criar o primeiro teste em `cypress/e2e/primeiro-teste.cy.js`; visitar a aplicação:

```javascript
describe('Primeiro teste', () => {
    it('Deve visitar a página inicial da aplicação', () => {
        cy.visit('https://meulivrodereceitas.vercel.app/');
        cy.url().should('include', '/home');
    });
});
```

5. Executar o teste em modo headless:

```bash
npx cypress run --spec "cypress/e2e/primeiro-teste.cy.js"

```

6. Criar o próximo teste em `cypress/e2e/verificacao-elementos.cy.js`; visitar a aplicação e verificar se os elementos básicos da página estão presentes:

```javascript
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
```
