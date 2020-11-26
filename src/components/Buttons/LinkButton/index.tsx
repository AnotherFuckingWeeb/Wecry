import React from 'react'
import { ILinkButtonProps } from './LinkButtonPropsInterface'
import './style.css'

export const LinkButton = (props: ILinkButtonProps): JSX.Element => {
    
    return (
        <a href={props.link} className='link-button'>{props.title}</a>
    )
}