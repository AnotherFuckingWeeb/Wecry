import React from 'react'
import { IHeaderPropsInterface } from './HeaderPropsInterface'
import './style.css'

export const Header = (props: IHeaderPropsInterface) : JSX.Element => {
    return (
        <h2 className='header' style={{fontSize: props.fontSize}}>{props.title}</h2>
    )
}