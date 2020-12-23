import React from 'react'
import { Images } from '../../assets/images'
import './style.css'

export const CompanyWallpaper = () : JSX.Element => {
   return (
       <div className='company-wallpaper' >
           <img src={Images.wallpapertest} alt="" />
       </div>
   )
}