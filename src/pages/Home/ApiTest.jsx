import React, { useEffect, useState } from 'react';
import { plane } from '../../contexts/terminal/Terminal';


const ApiTest = () => {
    const [product, setProduct] = useState()
    // const temp = JSON.stringify({ mesage: 'hello' })
    // console.log(temp);
    // useEffect(() => {
    //     plane.request({ name: 'sendMessage', params: { id: '0a8637dfbdc44744e72e7f9de3087bed' }, body: { message: 'hello' } }).then(data => setProduct(data))
    // })

    return (
        <>
            {product && <pre>{product.name}</pre>}
        </>
    );
};

export default ApiTest;