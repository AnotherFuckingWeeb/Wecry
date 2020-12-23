import React from 'react'
import { IProductCardImageProps } from './ProductCardImagePreviewInterface'
import './style.css'

export const ProductCardImagePreview = (props: IProductCardImageProps) : JSX.Element => {
    return (
        <div className='product-card-image-preview' >
            <img style={{ height: '100%' }} src={props.image} alt="" />
        </div>
    )
}