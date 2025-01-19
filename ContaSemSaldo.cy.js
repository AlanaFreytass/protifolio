describe('Cadastro de conta sem saldo', () => {
  before(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  it('Cadastro sem saldo', () => {

     cy.get('.ihdmxA').click()
    
     cy.get(':nth-child(2) > .input__default', { timeout: 10000 })
       .should('exist')
       .type('alanafernandafreitass@gmail.com', { force: true }); // força digitação pois o elemento estava hidden 
     cy.get(':nth-child(3) > .input__default').should('exist')
       .type('Alana Fernanda Freitas', { force: true })
     cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').should('exist')
       .type('123456', { force: true })
 
     cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').should('exist')
       .type('123456', { force: true })// confirmação de senha
     cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 .button__child').should('exist')
       .click({ force: true }) // clicando em cadastrar 
     cy.get('#btnCloseModal').click() 
 
     
     // Login do usuário em conta sem saldo
     cy.get('input.input__default').eq(0).type('alanafernandafreitass@gmail.com')
     cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
       .type('123456')
     cy.get('.otUnI').click()
     cy.get('#textBalance.home__Text-sc-1auj767-9').should('be.visible')//validação do login pelo saldo
     //cy.get('div.home__ContainerLink-sc-1auj767-2').click() //clique no botão de sair
 
 
   });
 });
 
  
