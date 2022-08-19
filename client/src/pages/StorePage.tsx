import React from 'react';
import { useParams } from 'react-router-dom';

const StorePage = () => {
    const { id } = useParams();
    return (
        <div>
            StorePage {id};
        </div>
    );
};

export default StorePage;