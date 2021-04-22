import React, { useState } from 'react'
import { IProductCardProps } from './ProductCardPropsInterface'
import { ZoomInImage } from '../../../ZoomInImage'
import './style.css'

export const ProductCardImage = (props: IProductCardProps) : JSX.Element => {
    
    const [showZoomIn, setShowZoomIn] = useState(false)
    
    return (
        <div>
            <div className='product-card-image' onClick={() => setShowZoomIn(true)} >
                <img src={`http://localhost:4000/uploads/${props.image}`} alt="" />
            </div>
            { showZoomIn && <ZoomInImage image={props.image} close={() => setShowZoomIn(false)} /> }
        </div>
    )
}