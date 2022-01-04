import React from 'react';

const ImageHelper = ({product}) => {
    const imageurl = product
        ? product.image
        : `https://images.asos-media.com/products/levis-perfect-t-shirt-with-batwing-logo/6721328-1-white?$n_640w$&wid=513&fit=constrain`
        return (
            <div className='rounded border border-sucess p-2'>
                <img 
                    src={imageurl}
                    style={{maxHeight:'100%', maxWidth:"100%"}}
                    className='mb-3 rounded'
                    alt=''
                />


            </div>
        )

};

export default ImageHelper;