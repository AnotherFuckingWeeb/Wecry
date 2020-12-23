import React from 'react'
import { IEditProfileInfoProps } from './EditProfileInfoPropsInterface'
import { Header } from '../../Header'
import './style.css'

export const EditProfileInfo = (props: IEditProfileInfoProps) : JSX.Element => {
    return (
        <div className='edit-profile-info' >
            <img src='http://localhost:3000/static/media/1604457981001.b21f8af2.jpg' alt="" />
            <div className='edit-profile-info-mb'>
                <Header title={props.fullname} fontSize={15} />
            </div>
            <p>( { props.email } )</p>
        </div>
    )
}