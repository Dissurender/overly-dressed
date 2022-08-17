import ClothingItem from "./ClothingItem";
import { Container, Row, Col } from 'react-bootstrap';

//Grab data from database later.
//{ clothes }: { clothes: Array<String> } with a nexted array of string, number, string.
const ClothingGrid = () => {
    return (
        <Container>
            <Row>
                <Col lg={3} md={3} sm={6} xs={6}>Column 1</Col>
                <Col lg={3} md={3} sm={6} xs={6}>Column 2</Col>
                <Col lg={3} md={3} sm={6} xs={6}>Column 3</Col>
                <Col lg={3} md={3} sm={6} xs={6}>Column 4</Col>
            </Row>
        </Container>
    );
}

export default ClothingGrid;