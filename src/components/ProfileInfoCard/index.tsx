import React, { useState } from 'react'
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import { LinkButton } from '../Buttons/LinkButton'
import { FlagIcon } from '../Flag/flag'
import { IProfileInfoCardProps } from './ProfileInfoCardPropsInterface'
import { WarningModal } from '../WarningModal'
import { User } from '../../utils/user'
import './style.css'

export const ProfileInfoCard = (props: IProfileInfoCardProps) : JSX.Element => {
    
    const [showModal, setShowModal] = useState(false)

    const user: User = new User();
    

    const onHandleDelete = () => {
        props.Delete();
        setShowModal(false);
    }

    return (
        <div className='profile-info-card' >
            <img src={`http://localhost:4000/uploads/${props.profileImage}`} alt="" />
            <h3>{`${props.name} ${props.lastname}`}</h3>
            <p>( {props.email} )</p>
            <div className='profile-info-card-country'>
                <FlagIcon code={props.country} size={'2x'} />
            </div>
            {
                user.Id == props.id && (
                    <>
                        <div className='profile-info-card-mb' >
                            <LinkButton title='Sell a product' href='/post/create' />
                        </div>
                        <LinkButton title='Edit Profile' href='/user/profile/edit' />
                        <p className='delete-btn' onClick={() => setShowModal(true)} >Delete Account</p>
                    </>
                )
            }
            {
                showModal && (
                    <WarningModal 
                        iconOptions={
                            {
                                icon: faExclamationTriangle,
                                color: 'red',
                                size: '3x'
                            }
                        }

                        title = 'Are you sure you want to delete your account?'
                        description = 'All of your data will be ERASED and there is not turning back to this action'
                        Close = {() => setShowModal(false)}
                        Next = {onHandleDelete}
                    />
                )
            }
        </div>
    )
}