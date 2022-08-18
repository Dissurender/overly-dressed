import ClothingItem from "./ClothingItem";
import { Row } from 'react-bootstrap';

//TODO: Can abstract out clothes per row but would need to refactor the hardcoded parametrs of clothingItem
const ClothingRow = () => {
    const templateImage = "https://statics.devilinspired.com/image/cache/catalog/products/202208/xiangqing-007_e8a396cca891226c25b131cd6789580a-750x1000.jpg";
    const templateName = "Adams Manor Sewwtheart and Bat Wings Appliques Striped Pattern Lolita JSK";
    const templatePrice = 50;

    return (
        <Row>
            <ClothingItem price={templatePrice} name={templateName} imageUrl={templateImage} />
            <ClothingItem price={templatePrice} name={templateName} imageUrl={templateImage} />
            <ClothingItem price={templatePrice} name={templateName} imageUrl={templateImage} />
            <ClothingItem price={templatePrice} name={templateName} imageUrl={templateImage} />
        </Row>
    )
}

export default ClothingRow;