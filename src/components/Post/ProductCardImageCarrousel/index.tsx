import React from 'react'
import { IProductCardImageCarrouselPropsInterface} from './ProductCardImageCarrouselPropsInterface'
import { ProductCardImage } from './ProductCardImage'
import './style.css'

export const ProductCardImageCarrousel = (props: IProductCardImageCarrouselPropsInterface) : JSX.Element => {
    return (
        <div className='product-card-image-carrousel' >
            {
                props.images.map((image: any) : JSX.Element => {
                    return <ProductCardImage image={image.name} />
                })
            }
        </div>
    )
}