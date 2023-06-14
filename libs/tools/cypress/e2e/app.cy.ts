/* eslint-disable cypress/unsafe-to-chain-command */
describe('albedo-drawer', () => {
  it('basic', () => {
    cy.visit('iframe.html?id=albedodrawer--story-1&viewMode=story');

    const directions = ['left', 'right', 'top', 'bottom'];

    directions.forEach((placement) => {
      cy.get('button')
        .contains(`Open ${placement}`, { matchCase: false })
        .click();

      cy.get('.ant-drawer-body')
        .contains('some random content', { matchCase: false })
        .should('exist');

      cy.get('.ant-drawer-mask').click();
    });
  });
});
