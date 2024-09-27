/// <reference types="Cypress" />

describe('my first suite', function(){



    it('my first test', function()
    {

            //i will start here my first testcase
             cy.request('post', 'http://216.10.245.166/Library/Addbook.php' , 
             
             {
                "name":"Learn .Net core with Abhilash",
                "isbn":"bcggsssutknjille0",
                "aisle":"259",
                "author":"John foe"

             }).then(function(response)
             
             {
                expect(response.body).to.have.property("Msg","successfully added")
                expect(response.status).to.eq(200)
             })
                
             })
            
    })