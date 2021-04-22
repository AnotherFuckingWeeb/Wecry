import React, { useState } from 'react'
import { IProductCardImageProps } from './ProductCardImagePreviewInterface'
import { ZoomInImage } from '../../ZoomInImage'
import './style.css'

export const ProductCardImagePreview = (props: IProductCardImageProps) : JSX.Element => {
    
    const [showZoomIn, setShowZoonIn] = useState(false);
    
    return (
        <div>
            <div className='product-card-image-preview' onClick={() => setShowZoonIn(true)}>
                <img src={`http://localhost:4000/uploads/${props.image}`} alt="" />
            </div>
            { showZoomIn && <ZoomInImage image={props.image} close={() => setShowZoonIn(false)} /> }
        </div>
    )
}

