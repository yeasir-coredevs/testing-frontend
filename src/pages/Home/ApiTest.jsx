import React, { useState } from 'react';
import { plane } from '../../contexts/terminal/Terminal';


const ApiTest = () => {
    const [product, setProduct] = useState()
    plane.request({ name: 'singleProduct', params: { id: '64ca84cf1c1475adfdf18e4d' } }).then(data => setProduct(data))
    return (
        <>
            {product && <pre>{product.name}</pre>}
        </>
    );
};

export default ApiTest;