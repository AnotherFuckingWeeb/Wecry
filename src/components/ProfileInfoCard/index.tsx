import React from 'react'
import { LinkButton } from '../Buttons/LinkButton'
import { FlagIcon } from '../Flag/flag'
import './style.css'

export const ProfileInfoCard = () : JSX.Element => {
    return (
        <div className='profile-info-card' >
            <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" />
            <h3>Margaret Rosamine</h3>
            <p>( yefersonsmarter@gmail.com )</p>
            <div className='profile-info-card-country'>
                <FlagIcon code='us' size={'2x'} />
            </div>
            <div className='profile-info-card-stats-container' >
                <div className='profile-info-card-stat' >

                </div>
                <div className='profile-info-card-stat' >

                </div>
                <div className='profile-info-card-stat' >

                </div>
            </div>
            <div className='profile-info-card-mb' >
                <LinkButton title='Sell a product' link='createpost' href='createpost' />
            </div>
            <LinkButton title='Edit Profile' link='editprofile' href='editprofile' />
        </div>
    )
}