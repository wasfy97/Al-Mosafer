///<reference types= "cypress" />

describe('Test Almosafer Website', () => {
    it('random actions', () => {
        let websites = ["https://www.almosafer.com/ar","https://www.almosafer.com/en"]
        let randomWebsite = websites[Math.floor(Math.random() * websites.length)]
        cy.visit(randomWebsite)
        cy.get('.cta__saudi').click()
        cy.get('#uncontrolled-tab-example-tab-hotels ').click()
        cy.get('[data-testid="Header__LanguageSwitch"]').invoke("text").then((text) => {
            if (text.includes("English")) {
              
              const englishLocations = ["دبي", "جدة"];
              const randomLocation = englishLocations[Math.floor(Math.random() * englishLocations.length)];
              cy.get('[data-testid="AutoCompleteInput"]').type(randomLocation);
              cy.get('[data-testid="AutoCompleteResultItem0"] ').click()
              const Options =["غرفة واحدة، 2 بالغون، 0 أطفال","1 غرفة، 1 بالغ، 0 أطفال"]
              const randomOptions = Options[Math.floor(Math.random() * Options.length)]
              cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(randomOptions)
              cy.get('.sc-1vkdpp9-5').click()


            } else if (text.includes("العربية")) {
              
              const arabicLocations = ["Dubai", "Jeddah", "Riyadh"];
              const randomLocation = arabicLocations[Math.floor(Math.random() * arabicLocations.length)];
              cy.get('[data-testid="AutoCompleteInput"]').type(randomLocation);
              cy.get('[data-testid="AutoCompleteResultItem0"] ').click()
              const Options = ["1 Room, 2 Adults, 0 Children","1 Room, 1 Adult, 0 Children"]
              const randomOptions = Options[Math.floor(Math.random() * Options.length)]
              cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(randomOptions)
              cy.get('.sc-1vkdpp9-5').click()
            } 
           
          });
         

        
    });
});