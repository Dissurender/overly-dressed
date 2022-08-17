import { Col, Image } from 'react-bootstrap';

const ClothingItem = ({ price, name, imageUrl }: { price: number, name: string, imageUrl: string }) => {
    return (
        <Col lg={3} md={3} sm={6} xs={6}>
            <Image src={imageUrl} fluid />
            <div className="caption center-block">{name}</div>
            <div className="caption center-block">{price}</div>
            <p></p>
        </Col>
    );
};

export default ClothingItem;