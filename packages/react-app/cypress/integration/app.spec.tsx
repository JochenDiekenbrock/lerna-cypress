describe('My First Test', () => {
    beforeEach(() =>{
        cy.visit('http://localhost:3000');
        cy.waitForReact(1000, '#root');
    })

    it('should find HelloWorld in App', () => {
        cy.react('HelloWorld', { props: { where: 'App' } }).should('have.length', '1');
    })

    it('should find HelloWorld in Web Component', () => {
        cy.react('HelloWorld', { props: { where: 'WebComponent' } }).should('have.length', '1');
    })
})
