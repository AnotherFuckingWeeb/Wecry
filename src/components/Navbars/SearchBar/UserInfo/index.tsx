import React from 'react';
import { IUserInfoProps } from './UserInfoPropsInterface'
import './style.css'

export const UserInfo = (props: IUserInfoProps) : JSX.Element => {
    return (
        <div onClick={props.onClick} className='user-profile-info'>
            <img src={props.profileImage} alt="" />
            <h3>{props.username}</h3>
        </div>
    )
}