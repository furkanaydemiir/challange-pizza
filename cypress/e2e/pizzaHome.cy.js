describe("ilk test denemesi",()=>{
    it("Home deneme",()=>{
     cy.visit("http://localhost:5173")
     cy.log("Home sayfası aktif.")
    })
    it("Home Button Aktif",()=>{
        cy.visit("http://localhost:5173")
        cy.get('.home-button').click()
        cy.url().should("include","/OrderPizza")
    })
})