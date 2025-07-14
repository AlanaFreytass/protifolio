# Testes Automatizados - BugBank

Este repositório contém testes automatizados criados para o aplicativo bancário fictício [BugBank](https://bugbank.netlify.app/), utilizando Cypress.  
Os testes validam os fluxos de cadastro (com e sem saldo), login e transferência entre contas.

---

## Estrutura dos Testes

Os testes estão organizados em dois arquivos principais:

### 1. Cadastro de Conta Sem Saldo
Fluxo coberto:
- Acesso à página do BugBank
- Preenchimento dos campos de cadastro (e-mail, nome, senha e confirmação)
- Cadastro de conta sem saldo
- Login e validação da visibilidade do saldo (esperado: R$ 0,00)
  
### 2. Cadastro de Conta Com Saldo e Transferência
Fluxo coberto:
- Acesso à página do BugBank
- Preenchimento dos campos de cadastro
- Seleção da opção de conta com saldo
- Login
- Realização de transferência para outra conta
- Validação da operação

---

## Observações Técnicas

Os testes foram divididos dessa forma porque o BugBank não salva os dados cadastrados entre sessões.  
Por isso, cada teste executa o processo completo de criação e login em conta, sem depender de dados anteriores.

---

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Git e GitHub
- SQL (básico)
- Jira (para acompanhamento do andamento dos testes e documentação)
---

## Sobre

Meu nome é Alana Freitas e atuo como Analista de Qualidade de Software, com foco em testes manuais e automatizados.  
Gosto de entregar testes bem estruturados, que ajudem a garantir a qualidade do produto e contribuam para um desenvolvimento mais seguro.

