import React from 'react'
import { ICardCompanyProps } from './CompanyCardPropsInterface'
import './style.css'

export const CompanyCard = (props: ICardCompanyProps) : JSX.Element => {
    return(
        <div className='company-card' >
            <div className='company-card-logo-container'>
                <div className='company-card-logo' >
                    <img src={props.logo}/>
                </div>
            </div>
            <div className='company-card-wallpaper' >
                <img src={props.wallpaper} alt="" />
            </div>
            <div className='company-card-name' >
                <h1>{props.name}</h1>
            </div>
            <div className='company-card-opinion' >
                <q>{props.description}</q>
            </div>
            <div className='company-card-link-container' >
                <a href="">See our products</a>
            </div>
        </div>
    )
}