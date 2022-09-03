import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const ClothingCard = ({ price, name, imageUrl }: { price: number, name: string, imageUrl: string }) => {
    return (
        <Col lg={3} md={3} sm={6} xs={6}>
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className="italics">Brand Name</span>
                    </Card.Text>
                </Card.Body>
            </Card>
            <p></p>
        </Col>
    );
};


export default ClothingCard;