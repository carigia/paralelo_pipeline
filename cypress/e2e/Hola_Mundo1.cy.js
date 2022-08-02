describe("bienvenido al curso de cypress seccion1",()=>{
   
    it("Mi primer test -> Hola Mundo",()=>{
        cy.log("Mi primer test en cypress")
        cy.visit("https://testingqarvn.com.es/")
        cy.wait(3000)
    }) 
})