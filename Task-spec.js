describe ('Test Automation Task', () => {
    beforeEach(() => {
       cy.visit(`https://www.selenium.dev/`);
});

it('Scenario 1', () => {
    cy.get('a[href*="/downloads"]').click()
    cy.get('.display-1').should('be.visible');
    cy.url().should ('include', 'https://www.selenium.dev/downloads/');
});

it('Scenario 2', () => {
    cy.get('#navbarDropdown').click()
    cy.get('[href="/project"]').click();
    cy.get('.selenium-button').contains('Read document').click();
    cy.get('.text-center').contains('Selenium Project Governance').should('be.visible');
    cy.get('footer').scrollIntoView();
    cy.get('.selenium-button').contains('Learn more').click();
    cy.url().should ('include', 'https://www.selenium.dev/sponsors/');
});

it('Scenario 3', () => {
    cy.get(':nth-child(4) > .nav-link > span').click()
    cy.url().should ('include', 'https://www.selenium.dev/documentation/');
    cy.get('.algolia-autocomplete').within(() => {
    cy.get('.form-control').click({force:true}).type('grid{enter}', {force:true});   
    cy.url().should ('include', 'https://www.selenium.dev/search/?q=grid')
    })
});
});
