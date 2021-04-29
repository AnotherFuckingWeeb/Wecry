import React from 'react';
import { IButtonStyleOneProps } from './ButtonStyleOnePropsInterface'
import './style.css'

export const ButtonStyleOne = (props: IButtonStyleOneProps) : JSX.Element => {
    return(
        <button className={`button-style-one ${props.isRed ? 'red-btn' : 'blue-btn'}`} onClick={props.onClick} >{props.title}</button>
    )
}