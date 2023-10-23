import { render, screen, fireEvent } from '@testing-library/react'
import Movies from './movies'

/*fireEvent, är en funktion som låter fejka att vi avfyrar en händelse */
describe('Movies Component', () => {
    test('should have a heading stating populära filmer', () => {
        //arrange
        render(<Movies />);
    
        //Act
        /*screen-readers varje element har en specifk roll.
        Screen-readers använder ej getByText. Så det första är rollen.
        I princip alla element har en roll. Annars kan man lägga till
        och ge ett element en roll
        Först ger vi rollen, sedan ett option-objekt*/
        const heading = screen.getByRole( 'heading', 'Populära filmer');
        // const heading = screen.getByText(/Populära filmer/i)
        expect(heading).toBeInTheDocument();
    });
    
    
    describe('should have a button for adding and removing favorites', () => {
        test('should have a button with the text Gör till favorit', () => {
            render(<Movies />);
        
            const button = screen.getByRole('button', {name: /Gör till favorit/i});
        
            expect(button).toBeInTheDocument();
        });
        
        test('the button should be red', () => {
            render(<Movies />);
        
            const button = screen.getByRole('button', {name: /Gör till favorit/i});
            /*sedan gör vi en assert som kollar om button är röd */
            //om bugg
            // expect(button).toHaveStyle({'background-color': 'red'});
            expect(button).toHaveStyle({backgroundColor: 'red'});
        }); 

        test('button should change background to orange', () => {
            render(<Movies />);
            
            const button = screen.getByRole('button', {name: /Gör till favorit/i});
            fireEvent.click(button);
            expect(button).toHaveStyle({backgroundColor: 'orange'});

        })

        test('checkbox should be unchecked initially', () => {
            render(<Movies />);

            /*name är label för vår checkbox */
            const checkbox = screen.getByRole('checkbox', {name: 'Avaktivera favoritknappen'});

            expect(checkbox).not.toBeChecked()
        })

        test('the add to favorite button should be disabled when the checkbox is checked', () => {
            render(<Movies />);

            /*name är label för vår checkbox */
            const checkbox = screen.getByRole('checkbox', {name: 'Avaktivera favoritknappen'});
            const button = screen.getByRole('button', {name: /Gör till favorit/i});

            fireEvent.click(checkbox);
            expect(button).toBeDisabled();


        })
    })

})

/*
Vi måste också hämta ut våår knapp




Gör yttelrigare ett test
När man trycker i kryssrrutan, ska knappen "Gör till favorit" bli disable*/