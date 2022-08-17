import '../scss/ClothingItem.scss';

const ClothingItem = ({ name, price, imageUrl }: { name: string, price: number, imageUrl: string }) => {
    return (
        <div className='clothing-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className='clothing-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    );
};

export default ClothingItem;