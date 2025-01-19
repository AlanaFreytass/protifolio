describe('Cadastro de conta com saldo', () => {
  before(() => {
    cy.visit('https://bugbank.netlify.app/');
  });

  it('Cadastro e login de usuário', () => {
    // Cadastro do usuário
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
    cy.get('#toggleAddBalance') // botão p criar conta com saldo 
      .should('exist')
      .click({ force: true })
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 .button__child').should('exist')
      .click({ force: true }) // clicando em cadastrar 
    cy.get('#btnCloseModal').click() //fechando modal de sucesso

    // Login do usuário em conta com saldo
    cy.get('input.input__default').eq(0).type('alanafernandafreitass@gmail.com')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
      .type('123456')
    cy.get('.otUnI').click()
    cy.get('#textBalance.home__Text-sc-1auj767-9').should('be.visible')//validação do login pelo saldo
    cy.get('div.home__ContainerLink-sc-1auj767-2').click() //clique no botão de sair


    /*Efetuando transferencia. 
    vamos efetuar a transferencia para a conta sem saldo criada. */
    cy.get('input.input__default').eq(0).type('alanafernandafreitass@gmail.com')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default')
      .type('123456')
    cy.get('.otUnI').click()
    cy.get('#textBalance.home__Text-sc-1auj767-9').should('be.visible')//validação do login pelo saldo  
    cy.get('#btn-TRANSFERÊNCIA.home__Button-sc-1auj767-15').click({force:true})
    cy.get(':nth-child(1) > .input__default').click()
    cy.get(':nth-child(1) > .input__default').type("147")
    cy.get('.account__data > :nth-child(2) > .input__default').type('1')
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('50')
    cy.get(':nth-child(3) > .input__default').type('Teste de transferencia pra conta valida')
    cy.get('.style__ContainerButton-sc-1wsixal-0').click  ()
    cy.get('body').then(($body) => {
      // Verifica se o modal está presente
      if ($body.find('#btnCloseModal').length > 0) {
        // Se o modal existir, clica no botão de fechar
        cy.get('#btnCloseModal').click();
      }
    
  


  })
})
})

