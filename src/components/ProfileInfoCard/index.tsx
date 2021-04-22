import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCube } from '@fortawesome/free-solid-svg-icons'
import { LinkButton } from '../Buttons/LinkButton'
import { FlagIcon } from '../Flag/flag'
import { IProfileInfoCardProps } from './ProfileInfoCardPropsInterface'
import { User } from '../../utils/user'
import './style.css'

export const ProfileInfoCard = (props: IProfileInfoCardProps) : JSX.Element => {
    
    const user: User = new User();
    
    return (
        <div className='profile-info-card' >
            <img src={`http://localhost:4000/uploads/${props.profileImage}`} alt="" />
            <h3>{`${props.name} ${props.lastname}`}</h3>
            <p>( {props.email} )</p>
            <div className='profile-info-card-country'>
                <FlagIcon code={props.country} size={'2x'} />
            </div>
            <div className='profile-info-card-stats-container' >
                <div style={{textAlign: 'center'}} >
                    <div className='profile-info-card-stat' >
                        <FontAwesomeIcon icon={faCube} color='white' size='lg' />
                    </div>
                    <p style={{fontSize: 15, marginTop: 10}} >posts</p>
                </div>
                <div style={{textAlign: 'center'}} >
                    <div className='profile-info-card-stat' >
                        <FontAwesomeIcon icon={faHeart} color='white' size='lg' />
                    </div>
                    <p style={{fontSize: 15, marginTop: 10}}>favorites</p>
                </div>
            </div>
            {
                user.Id == props.id && (
                    <>
                        <div className='profile-info-card-mb' >
                            <LinkButton title='Sell a product' href='/post/create' />
                        </div>
                        <LinkButton title='Edit Profile' href='/user/profile/edit' />
                    </>
                )
            }
        </div>
    )
}