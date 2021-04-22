import React from 'react';
import { IShadowBackgroundProps } from './ShadowBackgroundPropsInterface'
import './style.css'

export const ShadowBackground: React.FC<IShadowBackgroundProps> = ({ children, close }) : JSX.Element => {
    return (
        <div className='shadow-background' onClick={close} >
            { children }
        </div>
    )
}