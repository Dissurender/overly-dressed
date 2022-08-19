import React from 'react';
import { Col, Image } from 'react-bootstrap';

//Price should go to two decimal places.
const ClothingItem = ({ price, name, imageUrl }: { price: number, name: string, imageUrl: string }) => {
    function priceToUSDCurrencyString() {
        return "$" + price.toFixed(2);
    }


    return (
        <Col lg={3} md={3} sm={6} xs={6}>
            <Image src={imageUrl} fluid />
            <div className="caption center-block">{name}</div>
            <div className="caption center-block currency">{priceToUSDCurrencyString()}</div>
            <p></p>
        </Col>
    );
};

export default ClothingItem;