import React from 'react';

import ClothingRow from "./ClothingRow";
import { Container } from 'react-bootstrap';


//Grab data from database later.
//{ clothes }: { clothes: Array<String> } with a nexted array of string, number, string.
//Redudancy in code can definitely be refactored.
//Abstract to to an individual cloth item with 
//name, price and image
//Then abstract to rows, etc.

//Text should be clickable with a link to the item.
//It should also append? Basically turn into ... after X characters.



const ClothingGrid = () => {
    return (
        <Container>
            <h1>What's Hot</h1>
            <ClothingRow />
            <ClothingRow />
        </Container >
    );
}

export default ClothingGrid;