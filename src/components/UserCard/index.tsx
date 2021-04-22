import React from 'react'
import { Link } from 'react-router-dom'
import { FlagIcon } from '../Flag/flag'
import { IUserCardProps } from './UserCardPropsInterface'
import './style.css'

export const UserCard = (props: IUserCardProps) : JSX.Element => {
    return (
        <div className='user-card' >
            <div className='user-card-user-information' >
                <div className='user-card-user-information-picture-and-name' >
                    <div className='user-card-user-information-picture'>
                        <img src={`http://localhost:4000/uploads/${props.picture}`} alt="" />
                    </div>
                    <h3 className='user-card-user-information-user-name-spacing'>{props.name}</h3>
                </div>
                <div>
                    <FlagIcon code={props.country.toLowerCase()} size={'2x'} />
                </div>
            </div>
            <div className='user-card-user-opinion' >
                <q>{props.description}</q>
            </div>
            <div className='user-card-user-link' >
                <Link to={`/user/profile/uid=${props.id}`}>Go to profile</Link>
            </div>
        </div>
    )
}