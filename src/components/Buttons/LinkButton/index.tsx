import React from 'react'
import { Link } from 'react-router-dom'
import { ILinkButtonProps } from './LinkButtonPropsInterface'
import './style.css'

export const LinkButton = (props: ILinkButtonProps): JSX.Element => {
    
    return (
        <Link to={props.href} href={props.link} className='link-button'>{props.title}</Link>
    )
}