import React from 'react';
import { IStoreSectionProps } from './StoreSectionPropsInterface'
import { StoreCard } from './StoreCard'
import './style.css'

export const StoreSection = (props: IStoreSectionProps) : JSX.Element => {
    return (
        <div className='store-section'>
            <div className='store-section-title' >
                <p>Featured Stores in <b>{props.category}</b></p>
                <div className='store-section-link' >
                    <p>See Stores</p>
                </div>
            </div>
            <div className='store-section-stores-container'>
                <StoreCard name='KRIP' />
            </div>
        </div>
    )
}