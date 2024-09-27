import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FlipPage from "./pageObjects/FlipPage";
//import { DataTable } from "@cucumber/messages";

const flipPage = new FlipPage()
Given ('user launch the FlipKart page', ()=>
{
    cy.visit("https://www.flipkart.com/");
})

When('user search the iphone15 in the search bar',()=>{

    //here i am using page objetcs
    flipPage.getSearchBar().type("iphone15").type('{enter}')
})

When('user select the Product iphone15 blue color from list',()=>{
   
    //opening the child window on current window itself
    flipPage.getcurrentWindow().invoke("attr", "target","_self").click()
})

Then('user successfully selected the desired product',()=>{
    
    cy.get('.VU-ZEz').should('have.text', 'Apple iPhone 15 (Blue, 128 GB)')
   
})

