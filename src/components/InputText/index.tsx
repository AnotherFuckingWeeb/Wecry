import React from 'react'
import { IInputTextProps } from './InputTextPropsInterface'
import './style.css'

export const InputText = (props: IInputTextProps): JSX.Element => {
    return (
        <input className='form-input-text' placeholder={props.placeholder} type={props.type} name={props.name} value={props.value} onChange={props.onChange}  />
    )
}