import React from 'react';
import Loader from 'react-loader-spinner';
import { ILoadingProps } from './LoadingPropsInterface'
import './style.css'

export const Loading = ({ isLoading }: ILoadingProps) : JSX.Element => {
    return (
        <div className={isLoading ? 'loading-container' : ''} >
            <Loader visible={isLoading} type='TailSpin' color='#ffeb3b' width={100} height={100} />
        </div>
    )
}