import React from 'react'
import { IProductCardProps } from './ProductCardPropsInterface'
import './style.css'

export const ProductCardImage = (props: IProductCardProps) : JSX.Element => {
    return (
        <div className='product-card-image' >
            <img src={props.image} alt="" />
        </div>
    )
}