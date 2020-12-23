import React, { FunctionComponent } from 'react'
import { IEditProfileInputSectionProps } from './EditProfileInputSectionPropsInterface'
import './style.css'

export const EditProfileInputSection: FunctionComponent<IEditProfileInputSectionProps> = ({ width, height, justifyContent, children }) : JSX.Element => {
    return (
        <div className='edit-profile-input-section' style={{ width, height, justifyContent }} >
            { children }
        </div>
    )
}