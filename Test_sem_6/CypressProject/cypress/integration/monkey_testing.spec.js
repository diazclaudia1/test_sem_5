describe("Los estudiantes under monkeys", function () {
  it("visits los estudiantes and survives monkeys", function () {
    cy.visit("http://localhost:2368/ghost/#/signin");    
    cy.wait(1000);
    /*loginFail1();  
    cy.wait(1000);
    loginFail2();  
    cy.wait(1000);
    loginFail3();  
    cy.wait(1000);
    loginFail4();  
    cy.wait(1000);*/
    login();
    cy.wait(1000);
    filterPost1();
  });
});

function login() {        

        cy.get('input[name="identification"]')
        .first()
        .clear()
        .click({force: true })
        .type("cx.diaz@uniandes.edu.co")
        .wait(1000);

        cy.get('input[name="password"]')
        .first()
        .clear()
        .click({ force: true })
        .type("3167782178+caya")
        .wait(1000)
        .type("{enter}");
}

function loginFail1(){
  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true }) 
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })  
  .wait(1000)
  .type("{enter}");
}

function loginFail2(){
  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true })
  .type("wrong@uniandes.edu.co")
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })
  .type("1234")
  .wait(1000)
  .type("{enter}");
}

function loginFail3(){
  cy.get('input[name="identification"]')
  .first()
  .clear()
  .click({force: true })
  .type("wrong@uniandes.edu.co")
  .wait(1000);

  cy.get('input[name="password"]')
  .first()
  .clear()
  .click({ force: true })  
  .wait(1000)
  .type("{enter}");
}

function filterPost1(){
  
}
