import React from 'react';
import { IDescriptionInputProps } from './DescriptionInputPropsInterface';
import './style.css'

export const DescriptionInput = (props: IDescriptionInputProps) : JSX.Element => {
    return(
        <textarea className='description-input' placeholder={props.placeholder} style={{width: props.width}} name={props.name} value={props.value} onChange={props.onChange} />
    )
}