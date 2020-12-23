import React, { FunctionComponent } from 'react'
import { ICreatePostInputSectionProps } from './CreatePostInputSectionPropsInterface'
import './style.css'

export const CreatePostInputSection: FunctionComponent<ICreatePostInputSectionProps> = ({ height, justifyContent, children }) => {
    return (
        <div className='create-post-input-section' style={{height, justifyContent: `${justifyContent ? 'center' : ''}`}} > 
            {children}
        </div>
    )
}