import React from 'react'
import { IInputSectionProps } from './InputSectionPropsInterface'
import './style.css'

export const InputSection: React.FunctionComponent<IInputSectionProps> = ({ width, height, flexDirection, alignItems, justifyContent, children }) : JSX.Element => {
    return (
        <div className='input-section' style={{width, height, flexDirection, alignItems, justifyContent}} >
            {children}
        </div>
    )
}