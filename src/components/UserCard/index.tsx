import React from 'react'
import { FlagIcon } from '../Flag/flag'
import { IUserCardProps } from './UserCardPropsInterface'
import './style.css'

export const UserCard = (props: IUserCardProps) : JSX.Element => {
    return (
        <div className='user-card' >
            <div className='user-card-user-information' >
                <div className='user-card-user-information-picture-and-name' >
                    <div className='user-card-user-information-picture'>
                        <img src={props.picture} alt="" />
                    </div>
                    <h3 className='user-card-user-information-user-name-spacing'>{props.name}</h3>
                </div>
                <div>
                    <FlagIcon code={props.country.toLowerCase()} size={'2x'} />
                </div>
            </div>
            <div className='user-card-user-opinion' >
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus ipsum placeat sequi omnis provident assumenda ex dolore! Natus deleniti non blanditiis explicabo ad hic vitae nam beatae enim obcaecati!</q>
            </div>
            <div className='user-card-user-link' >
                <a href="">Go to profile</a>
            </div>
        </div>
    )
}