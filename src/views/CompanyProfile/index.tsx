import React from 'react'
import { Helmet } from 'react-helmet'
import { ICompanyProfileProps } from './CompanyProfilePropsInterface'
import { ICompanyProfileState } from './CompanyProfileStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { CompanyInfoCard } from '../../components/CompanyInfoCard'
import { ProductCard } from '../../components/ProductCard'
import { CompanyWallpaper } from '../../components/CompanyWallpaper' 
import './style.css'

class CompanyProfile extends React.Component<ICompanyProfileProps, ICompanyProfileState> {
    render() : JSX.Element {
        return (
            <main>
                <Helmet>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <SearchBar/>
                <CompanyWallpaper/>
                <div className='company-profile-main-container'>
                    <div className='company-info-card-container' >
                        <CompanyInfoCard/>
                    </div>
                    <div className='company-profile-products-container' >
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </main>
        )
    } 
}

export default CompanyProfile