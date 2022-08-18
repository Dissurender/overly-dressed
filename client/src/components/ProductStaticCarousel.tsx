import Carousel from 'react-bootstrap/Carousel';
import React from 'react';


function ProductStaticCarousel() {
    //const [index, setIndex] = useState(0);

    /*const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };*/

    return (
        <Carousel data-interval="false">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.devilinspired.com/image/catalog/banner/2022banner/2-22-7/b6460188a428354484fd5a00aab5613b_%E8%8B%B1%E8%AF%AD.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.devilinspired.com/image/catalog/banner/2022banner/2022-6/965c382f1dbf5e80a211aa6085eb626d_%E8%8B%B1%E8%AF%AD.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.devilinspired.com/image/catalog/banner/2022banner/2022-6/fe44773729fcc90d86ffbd0863bfb339_%E8%8B%B1%E8%AF%AD.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductStaticCarousel;