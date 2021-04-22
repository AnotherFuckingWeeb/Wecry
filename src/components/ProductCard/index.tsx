import React from 'react'
import { IProductCardProps } from './ProductCardPropsInterface'
import { LinkButton } from '../Buttons/LinkButton'
import { Header } from '../Header'
import './style.css'

export const ProductCard = (props: IProductCardProps) : JSX.Element => {
    return (
        <div className='product-card' >
            <div className='product-card-image-container' >
                <img src={`http://localhost:4000/uploads/${props.image}`} alt="" />
            </div>
            <div className='product-card-description-container' >
                <div className='product-card-mb' >
                    <Header title={`$ ${props.price}`} fontSize={25} />
                </div>
                <div className='product-card-mb' >
                    <p>{props.title}</p>
                </div>
                <div className='product-card-description-container-link ' >
                    <LinkButton title='See Product' href={`/post/post_id=${props.id}`} />
                </div>
            </div>
        </div>
    )
}