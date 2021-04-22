import React from 'react'
import { IInputTextProps } from './InputTextPropsInterface'
import './style.css'

export const InputText = (props: IInputTextProps): JSX.Element => {
 
    return (
        <>
            { props.validate && <label htmlFor="input-error" className='input-invalid-label' >{props.validate}</label>}
            <input className={`form-input-text ${ props.validate ? 'input-invalid' : ''}`} placeholder={props.placeholder} type={props.type} name={props.name} value={props.value} maxLength={props.maxLength} onChange={props.onChange} onFocus={props.onFocus} />
        </>
    )
}