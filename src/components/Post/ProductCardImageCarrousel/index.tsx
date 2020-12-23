import React from 'react'
import { IProductCardImageCarrouselPropsInterface} from './ProductCardImageCarrouselPropsInterface'
import { ProductCardImage } from './ProductCardImage'
import './style.css'

export const ProductCardImageCarrousel = (props: IProductCardImageCarrouselPropsInterface) : JSX.Element => {
    return (
        <div className='product-card-image-carrousel' >
            <ProductCardImage image='https://http2.mlstatic.com/home-theater-bluray-samsung-3d-51-nuevo-1000wat-D_NQ_NP_744897-MLV44145255389_112020-O.webp' />
        </div>
    )
}