import React from 'react'
import { LinkButton } from '../../Buttons/LinkButton'
import { FlagIcon } from '../../Flag/flag'
import { IProductOwnerCardPropsInterface } from './ProductOwnerCardPropsInterface'
import './style.css'

export const ProductOwnerCard = (props: IProductOwnerCardPropsInterface) : JSX.Element => {
    return (
        <div className='product-owner-card'>
            <div className='product-owner-card-user-information-container'>
                <div className='product-owner-card-user-information' >
                    <div className='product-owner-card-user-information-user-image'>
                        <img src={props.image} alt="" />
                    </div>
                    <h3>{props.username}</h3>
                </div>
                <FlagIcon code={props.country.toLocaleLowerCase()} size={'2x'} />
            </div>
            <div className='product-owner-card-button'>
                <LinkButton title='See Profile' href='#' link='#' />
            </div>
        </div>
    )
}