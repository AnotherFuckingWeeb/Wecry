import React from 'react'
import './style.css'

export const CompanyInfoCard = () : JSX.Element => {
    return (
        <div className='company-info-card' >
            <div className='shadow-image-card' >
                <img src="https://http2.mlstatic.com/D_Q_NP_821476-MLA31803877484_082019-T.webp" alt="" />
            </div>
            <h3>Margaret Rosamine</h3>
            <p>
                somos la solución para tu vehiculo. Te brindamos los mejores repuestos y aceites
            </p>
        </div>
    )
}