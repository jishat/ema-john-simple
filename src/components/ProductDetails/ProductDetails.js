import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const {Productkey} = useParams();
    return (
        <div>
            {Productkey}
        </div>
    );
};

export default ProductDetails;