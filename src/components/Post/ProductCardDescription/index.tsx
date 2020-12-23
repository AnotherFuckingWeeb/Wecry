import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IProductCardDescriptionProps } from './ProductCardDescriptionPropsInterface'
import { Header } from '../../Header';
import { ButtonStyleOne } from '../../Buttons/ButtonStyleOne';
import './style.css'

export const ProductCardDescription = (props: IProductCardDescriptionProps) : JSX.Element => {
    return (
        <div className='product-card-description' >
            <div className='product-card-description-title'>
                <Header title={props.title} fontSize={20} />
                <FontAwesomeIcon className='heart-icon' icon={faHeart} size='lg' />
            </div>
            <h1>{props.amount}</h1>
            <p>{props.description}</p>
            <div className='product-card-description-button'>
                <ButtonStyleOne title='Buy Product' />
            </div>
        </div>
    )
} 