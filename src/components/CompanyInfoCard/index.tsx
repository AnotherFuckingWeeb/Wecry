import React from 'react'
import { ICompanyInfoCardProps } from './CompanyInfoCardPropsInterface'
import { LinkButton } from '../Buttons/LinkButton'
import { User } from '../../utils/user'
import './style.css'

export const CompanyInfoCard = (props: ICompanyInfoCardProps) : JSX.Element => {
    
    const user: User = new User()

    return (
        <div className='company-info-card' >
            <div className='shadow-image-card' >
                <img src={`http://localhost:4000/uploads/${props.logo}`} alt="" />
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            {
                user.Id === props.id && <LinkButton title='Create Product' href='/createpost' />
            }
        </div>
    )
}