import React from 'react';
import '../../theme/styles.scss';
import { ProductDetailsProperty } from 'pages/Shop/Shop';
import { useParams } from 'react-router';

interface ProductDetailsProps {
    data?: ProductDetailsProperty;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    data
}) => {
    const { id } = useParams();
    console.log(id);
    return (
        <div className='productDetailsContainer'>
            <div className='productDetailsTop'>
                <div className='leftSection'>
                    {data?.thumbnails?.map((item) => {
                        return (
                            <img src={item}></img>
                        )
                    }
                    )}
                </div>
                <div className='middleSection'>
                    <img src={data?.picture}></img>
                </div>
                <div className='rightSection'>
                    <div className='productTitle'>{data?.name}</div>
                    <div className='price'>{data?.price}</div>
                    <div className='sizeChart'>
                        <div className='sizeChartText'>How does it fit? </div>
                        <div className='sizeChartIcon'></div>
                    </div>
                    <div className='description'>{data?.description}</div>
                    <div className='orderButton'></div>
                </div>
            </div>
            <div className='relatedProductsContainer'></div>
        </div>
    )
}

export default ProductDetails;