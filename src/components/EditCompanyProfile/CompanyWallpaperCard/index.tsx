import React from 'react'
import { ICompanyWallpaperCardProps } from './CompanyWallpaperCardPropsInterface'
import { User } from '../../../utils/user'
import './style.css'

export const CompanyWallpaperCard = (props: ICompanyWallpaperCardProps) : JSX.Element => {
    
    const user: User = new User();

    const getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        props.onChange(event);
    }

    const openImageFolder = () : void => {
        const input = document.getElementById('edit-wallpaper');
        
        if (input) input.click();
    }

    return (
        <div className='company-wallpaper-card' onClick={openImageFolder} >
            <input style={{ display: 'none' }} onChange={getImagePreview} type="file" name="edit-wallpaper" id="edit-wallpaper"/>
            <img src={props.image ? URL.createObjectURL(props.image) : user.Wallpaper } />
        </div>
    )
}