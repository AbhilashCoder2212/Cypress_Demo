
//i have written here a dummy code to have an idea on now Page objects works

class FlipPage
{
   getSearchBar(){
  
      return cy.get('input[class=Pke_EE]')
   }
   getcurrentWindow(){
  
      return cy.contains('Apple iPhone 15 (Blue, 128 GB)')
   }
   getCurrentProduct(){
   
      ///// code to write 
   }
}

export default FlipPage;