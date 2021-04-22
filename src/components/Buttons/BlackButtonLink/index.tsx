import React from 'react'
import { Link } from 'react-router-dom'
import { IBlackButtonLinkProps } from './BlackButtonLinkPropsInterface'
import './style.css'

export const BlackButtonLink = (props: IBlackButtonLinkProps) : JSX.Element => {
    return (
        <Link to={props.href} className='black-button-link'>
            {props.title}
        </Link>
    )
}