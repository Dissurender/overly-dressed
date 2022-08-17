import ClothingItem from "./ClothingItem";
import { Container, Row, Col, Image } from 'react-bootstrap';

//Grab data from database later.
//{ clothes }: { clothes: Array<String> } with a nexted array of string, number, string.
//Redudancy in code can definitely be refactored.
//Abstract to to an individual cloth item with 
//name, price and image
//Then abstract to rows, etc.

//Text should be clickable with a link to the item.
//It should also append? Basically turn into ... after X characters.

const ClothingGrid = () => {
    const templateImage = "https://statics.devilinspired.com/image/cache/catalog/products/202208/xiangqing-007_e8a396cca891226c25b131cd6789580a-750x1000.jpg";
    return (
        <Container>
            <Row>
                <Col lg={3} md={3} sm={6} xs={6}>
                    <Image src={templateImage} fluid />
                    <div className="caption center-block">Adams Manor Sewwtheart and Bat Wings Appliques Striped Pattern Lolita JSK</div>
                    <div className="caption center-block">$117.50</div>
                    <p></p>
                </Col>
                <Col lg={3} md={3} sm={6} xs={6}>
                    <Image src={templateImage} fluid />
                    <div className="caption center-block">Adams Manor Sewwtheart and Bat Wings Appliques Striped Pattern Lolita JSK</div>
                    <div className="caption center-block">$117.50</div>
                    <p></p>
                </Col>
                <Col lg={3} md={3} sm={6} xs={6}>
                    <p><Image src={templateImage} fluid /></p>
                </Col>
                <Col lg={3} md={3} sm={6} xs={6}>
                    <p><Image src={templateImage} fluid /></p>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={3} sm={6} xs={6}>
                    <p><Image src={templateImage} fluid /></p>
                </Col>
                <Col lg={3} md={3} sm={6} xs={6}>
                    <p><Image src={templateImage} fluid /></p>
                </Col>
                <Col lg={3} md={3} sm={6} xs={6}>
                    <p><Image src={templateImage} fluid /></p>
                </Col>
                <Col lg={3} md={3} sm={6} xs={6}>
                    <p><Image src={templateImage} fluid /></p>
                </Col>
            </Row>
        </Container >
    );
}

export default ClothingGrid;