import React from 'react';
import { IStoreCardProps } from './StoreCardPropsInterface'
import './style.css'

export const StoreCard = (props: IStoreCardProps) : JSX.Element => {
    return(
        <div className='store-card' >
            <img src={props.icon} alt=""/>
            <h4>{props.name}</h4>
        </div>
    )
}