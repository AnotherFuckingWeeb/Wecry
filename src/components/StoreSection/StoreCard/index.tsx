import React from 'react';
import { Link } from 'react-router-dom'
import { IStoreCardProps } from './StoreCardPropsInterface'
import './style.css'

export const StoreCard = (props: IStoreCardProps) : JSX.Element => {
    return(
        <Link to={`/company/profile/cid=${props.id}`} className='store-card' >
            <img src={`http://localhost:4000/uploads/${props.icon}`} alt=""/>
            <h4>{props.name}</h4>
        </Link>
    )
}