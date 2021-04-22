import React from 'react'
import { Link } from 'react-router-dom'
import { ICardCompanyProps } from './CompanyCardPropsInterface'
import './style.css'

export const CompanyCard = (props: ICardCompanyProps) : JSX.Element => {
    return(
        <div className='company-card' >
            <div className='company-card-logo-container'>
                <div className='company-card-logo' >
                    <img src={`http://localhost:4000/uploads/${props.logo}`}/>
                </div>
            </div>
            <div className='company-card-wallpaper' >
                <img src={`http://localhost:4000/uploads/${props.wallpaper}`} alt="" />
            </div>
            <div className='company-card-name' >
                <h1>{props.name}</h1>
            </div>
            <div className='company-card-opinion' >
                <q>{props.description}</q>
            </div>
            <div className='company-card-link-container' >
                <Link to={`/company/profile/cid=${props.id}`} href="">See our products</Link>
            </div>
        </div>
    )
}