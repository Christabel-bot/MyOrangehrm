  /// <reference types="cypress" /> 
  
before(() => {
    // runs before all test in the block
    cy.log('This is before all test');
});


  beforeEach(() => {
    // runs beforen each test in the block
    cy.log('This is before each test');
});

afterEach(() => {
    // runs after each test in the block
    cy.log('This is after each test');
});


  after(() => {
    // runs after all test in the block
    cy.log('This is after all test');
});

it('Test 1', () => {
 cy.log('Executing Test 1');
 expect (true).to.equal(true);
});

it('Test 2', () => {
 cy.log('Executing Test 2');
 expect (true).to.equal(true);
});


