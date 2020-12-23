import React from 'react'
import { LinkButton } from '../Buttons/LinkButton'
import { Header } from '../Header'
import './style.css'

export const ProductCard = () : JSX.Element => {
    return (
        <div className='product-card' >
            <div className='product-card-image-container' >
                <img src="https://http2.mlstatic.com/aditivo-para-grietas-en-anillos-del-piston-bizol-250-ml-D_NQ_NP_614294-MLV32864884567_112019-W.webp" alt="" />
            </div>
            <div className='product-card-description-container' >
                <div className='product-card-mb' >
                    <Header title='$ 30.000' fontSize={25} />
                </div>
                <div className='product-card-mb' >
                    <p>Aditivo Para Grietas En Anillos Del Pistón, Bizol (250 Ml)</p>
                </div>
                <div className='product-card-description-container-link ' >
                    <LinkButton title='See Product' link='#' href='#' />
                </div>
            </div>
        </div>
    )
}