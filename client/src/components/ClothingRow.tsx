import React from 'react';

import ClothingCard from "./ClothingCard";
import { Row } from 'react-bootstrap';

//TODO: Can abstract out clothes per row but would need to refactor the hardcoded parametrs of clothingItem
const ClothingRow = () => {
    const templateImage = "https://cdn.discordapp.com/attachments/475907843191603202/1010264262930878555/placeholder-image.png";
    const templatePrice = 50;

    return (
        <Row>
            <ClothingCard price={templatePrice} name={"Adam's Manor"} imageUrl={templateImage} />
            <ClothingCard price={templatePrice} name={"Swettheart and Bat Wings"} imageUrl={templateImage} />
            <ClothingCard price={templatePrice} name={"Appliques Striped Pattern"} imageUrl={templateImage} />
            <ClothingCard price={templatePrice} name={"JSK"} imageUrl={templateImage} />
        </Row>
    )
}

export default ClothingRow;