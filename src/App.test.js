/*render- en funktion som låter oss rendera en komponent 
i minnet, så att vi kan testa den. Vi skapar alltså en virtuell DOM

screen- gör så att vi kan ställa frågor till vår virtuella DOM t.ex) leta upp
en knapp där det står "klicka här" så att vi sedan kan testa knappen.

Sedan importerar vi app komponenten.

Sedan kommer testet, som alltid består av 2 delar. 
Här inne har vi själva testet/funktionen
test('rubriken för testet') {

  render(<App />) 
  -> vi skapar den vituella domen för app-komponenten

  const linkElement = screen.getByText(/learn react/i); 
  -> vi vill ha tag i ett element, vi använder oss av screen.
  screen har tillgång till all DOM som finns i vår komponent.
  vi använder oss av metoder getByText(vi skickar i det vi söker efter)
  Nu säger vi sök efter texten learn react
  i = stora och smp bokstäver.

  Vi får tillbaka ett html-element
}
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //Arrange - vi renderar appen/vi gör en setup
  // render(<App />);

  //Act - vi hämtar in texten
  // const linkElement = screen.getByText(/learn angular/i);

  /*Assert - vi gör en kontroll. Vi förväntar oss att 
  elementet vi har hämtat i tidigare stadiet, att det
  ska vara i dokumentet*/
  // expect(linkElement).toBeInTheDocument();
});


/*npm test för att köra testet */
