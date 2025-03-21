
describe('Order Placement Workflow', () => {
  it('should complete the order placement workflow successfully', () => {
    // 1. Search for the restaurant "West, Mayer and Wintheiser"
    cy.visit('https://pwiddy.interview.tisostudio.com/'); // Visit the application's home page
    cy.get('.flex-grow > .w-full').type('West, Mayer and Wintheiser');
    cy.get('.px-6').click(); //  Use the correct selector for the search button
    cy.wait(1000);
    cy.get('.p-4').click();
    cy.get(':nth-child(1) > :nth-child(1) > .flex-grow > .mt-2 > .px-3').click();
    cy.wait(500);
    cy.get(':nth-child(2) > :nth-child(1) > .flex-grow > .mt-2 > .px-3').click();
    cy.wait(500);
    cy.get('.w-16').click();
    cy.wait(500);
    cy.get('.mt-6').click();
    cy.get('#cash').click();
    cy.get('#address').type('123 Main St');
    cy.get('#city').type('aabc');
    cy.get('#zipCode').type('123');
    cy.get('#phone').type('1234567890');
    cy.get('.bg-white > .mt-6').click();
    cy.get('.mb-8').should('contain', 'Thank you for your order!');
   
  });
});

