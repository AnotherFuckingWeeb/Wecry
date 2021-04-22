import React from 'react'
import { LinkButton } from '../../Buttons/LinkButton'
import { FlagIcon } from '../../Flag/flag'
import { IProductOwnerCardPropsInterface } from './ProductOwnerCardPropsInterface'
import './style.css'

export const ProductOwnerCard = (props: IProductOwnerCardPropsInterface) : JSX.Element => {

    const getUrlByRole = () : string => {
        return props.isCompany ? `/company/profile/cid=${props.id}` : `/user/profile/uid=${props.id}`;
    }

    return (
        <div className='product-owner-card'>
            <div className='product-owner-card-user-information-container'>
                <div className='product-owner-card-user-information' >
                    <div className='product-owner-card-user-information-user-image'>
                        <img src={`http://localhost:4000/uploads/${props.image}`} alt="" />
                    </div>
                    <h3>{props.username}</h3>
                </div>
                <FlagIcon code={props.country} size={'2x'} />
            </div>
            <div style={{textAlign: 'center'}} >
                <p style={{fontSize: 15}}>{props.description}</p>
            </div>
            <div className='product-owner-card-button'>
                <LinkButton title='See Profile' href={getUrlByRole()} />
            </div>
        </div>
    )
}