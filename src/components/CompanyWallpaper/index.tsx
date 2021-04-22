import React from 'react'
import { Images } from '../../assets/images'
import { ICompanyWallpaperProps } from './CompanyWallpaperPropsInterface'
import './style.css'

export const CompanyWallpaper = (props: ICompanyWallpaperProps) : JSX.Element => {
   return (
       <div className='company-wallpaper' >
           <img src={`http://localhost:4000/uploads/${props.wallpaper}`} alt="" />
       </div>
   )
}