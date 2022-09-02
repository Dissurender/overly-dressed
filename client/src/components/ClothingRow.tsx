import React from 'react';

import ClothingItem from "./ClothingItem";
import { Row } from 'react-bootstrap';

//TODO: Can abstract out clothes per row but would need to refactor the hardcoded parametrs of clothingItem
const ClothingRow = () => {
    const templateImage = "https://cdn.discordapp.com/attachments/475907843191603202/1010264262930878555/placeholder-image.png";
    const templatePrice = 50;

    return (
        <Row>
            <ClothingItem price={templatePrice} name={"Adam's Manor"} imageUrl={templateImage} />
            <ClothingItem price={templatePrice} name={"Swettheart and Bat Wings"} imageUrl={templateImage} />
            <ClothingItem price={templatePrice} name={"Appliques Striped Pattern"} imageUrl={templateImage} />
            <ClothingItem price={templatePrice} name={"JSK"} imageUrl={templateImage} />
        </Row>
    )
}

export default ClothingRow;