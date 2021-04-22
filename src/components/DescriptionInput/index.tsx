import React from 'react';
import { IDescriptionInputProps } from './DescriptionInputPropsInterface';
import './style.css'

export const DescriptionInput = (props: IDescriptionInputProps) : JSX.Element => {
    return(
        <>
            { props.validate && <label style={{fontSize: 11, marginBottom: 5, color: 'white', backgroundColor: 'rgba(255, 0, 0, 0.5)', padding: 10, borderRadius: 3}} >{props.validate}</label> }
            <textarea className='description-input' placeholder={props.placeholder} style={{width: props.width}} name={props.name} value={props.value} onChange={props.onChange} onFocus={props.onFocus} />
        </>
    )
}