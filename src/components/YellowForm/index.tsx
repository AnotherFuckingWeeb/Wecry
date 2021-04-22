import React from 'react'
import { IYellowFormProps } from './YelloFormPropsInterface'
import './style.css'

export const YellowForm: React.FunctionComponent<IYellowFormProps> = ({ children, method, onSubmit }) : JSX.Element => {
    return (
        <form className='yellow-form' method={method} encType='multipart/form-data' onSubmit={onSubmit}>
            {children}
        </form>
    )
} 