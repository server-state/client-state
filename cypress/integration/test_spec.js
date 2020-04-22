describe("My First Test", () => {
    it('Does not do much!', () => {
        cy.visit('http://localhost:3479/')
            .wait(2000)
            .screenshot();
        expect(true).to.equal(true);
    });
});
