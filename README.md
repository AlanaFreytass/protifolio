Testes de Cadastro e Login - BugBank

Este repositório contém testes automatizados para o aplicativo BugBank, focando no cadastro de contas com e sem saldo, bem como no processo de login em ambas as formas

 Estrutura dos Testes

Os testes estão organizados em dois grupos principais:

### 1. Cadastro de Conta Sem Saldo

Este teste verifica o fluxo de cadastro de um usuário sem saldo. As etapas incluem:

- Acessar a página do BugBank.
- Preencher os campos de e-mail, nome, senha e confirmação de senha.
- Clicar no botão de cadastro.
- Realizar o login e validar a visibilidade do saldo (que deve ser zero).

```js
describe('Cadastro de conta sem saldo', () => {
  before(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  it('Cadastro sem saldo', () => {
    // Código do teste...
  });
});
```

 2. Cadastro de Conta Com Saldo

Este teste verifica o fluxo de cadastro de um usuário com saldo. As etapas incluem:

- Acessar a página do BugBank.
- Preencher os campos de e-mail, nome, senha e confirmação de senha.
- Selecionar a opção para criar uma conta com saldo.
- Clicar no botão de cadastro.
- Realizar o login e validar a visibilidade do saldo.
- Efetuar uma transferência para outra conta.

```js
describe('Cadastro de conta com saldo', () => {
  before(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  it('Cadastro e login de usuário', () => {
    // Código do teste...
  });
});
```
Esses são alguns testes que asseguram que os processos de cadastro e login operem de maneira eficaz, tanto para contas com saldo quanto para contas sem saldo. 
Foram divididos da maneira atual pois, nesse caso não seria possivel dividir os testes em specs diferentes já que o site usado para teste não salva as informações previamente cadastradas
Sendo assim, seria necessário executar 1 unico login, caso existisse mais de um, as informações antigas se perderiam. 
A automação dos testes não apenas acelera a verificação de funcionalidades, mas também aumenta a confiabilidade do aplicativo, 
permitindo uma detecção precoce de falhas e assegurando uma experiência de usuário de alta qualidade.
