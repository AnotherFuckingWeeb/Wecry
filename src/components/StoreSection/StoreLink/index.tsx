import React from 'react';
import { IStoreLinkProps } from './StoreLinkPropsInterface'
import { Link } from 'react-router-dom'
import './style.css'

export const StoreLink = (props: IStoreLinkProps) : JSX.Element => {
    return (
        <Link to={`/stores/category=${props.category}`} className='store-section-link' >
            See Stores
        </Link>
    )
}