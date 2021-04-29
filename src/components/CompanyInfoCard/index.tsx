import React, { useState } from 'react'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { ICompanyInfoCardProps } from './CompanyInfoCardPropsInterface'
import { LinkButton } from '../Buttons/LinkButton'
import { WarningModal } from '../WarningModal'
import { User } from '../../utils/user'
import './style.css'

export const CompanyInfoCard = (props: ICompanyInfoCardProps) : JSX.Element => {
    
    const user: User = new User()

    const [showWarningModal, setShowWarningModal] = useState(false)

    const handleDelete = () => {
        props.Delete();
        setShowWarningModal(false);
    }

    return (
        <div className='company-info-card' >
            <div className='shadow-image-card' >
                <img src={`http://localhost:4000/uploads/${props.logo}`} alt="" />
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            {
                user.Id == props.id && (
                    <div>
                        <LinkButton title='Create Product' href='/post/create' />
                        <LinkButton title='Edit Profile' href='/company/profile/edit'/>
                        <p onClick={() => setShowWarningModal(true)} className='company-info-card-delete-btn'>Delete Account</p>
                    </div>
                )
            }
            { showWarningModal && (
                <WarningModal
                    iconOptions={{
                        icon: faExclamationTriangle,
                        color: 'red',
                        size: '3x'
                    }}
                    
                    title = 'Are you sure you want to delete your account?'
                    description = 'All of your data will be ERASED and there is not turning back to this action'
                    Close={() => setShowWarningModal(false)}
                    Next={handleDelete}
                />
            )}
        </div>
    )
}