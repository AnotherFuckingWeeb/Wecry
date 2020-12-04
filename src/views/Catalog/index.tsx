import React from 'react'
import { Helmet } from 'react-helmet'
import { faHouseUser, faMobileAlt, faBaby, faUtensils, faTshirt, faFutbol, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { ICatalogProps } from './CatalogPropsInterface'
import { ICatalogState } from './CatalogStateIinterface' 
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { Header } from '../../components/Header'
import { CategoryCard } from '../../components/CategoryCard'
import './style.css'

class Catalog extends React.Component<ICatalogProps, ICatalogState> {

    private categories: Array<any> = [
        {
            title: 'Home',
            icon: faHouseUser
        },
        {
            title: 'Cellphones',
            icon: faMobileAlt
        },
        {
            title: 'Babies',
            icon: faBaby
        },
        {
            title: 'Kitchen',
            icon: faUtensils
        },
        {
            title: 'Sports',
            icon: faFutbol
        },
        {
            title: 'Clothes',
            icon: faTshirt
        },
        {
            title: 'PC',
            icon: faDesktop
        }
    ]

    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <title>Catalog</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <HomeNavbar/>
                <section className='catalog-header' >
                    <Header title='See our catalog' fontSize={60} />
                </section>
                <section className='categories-container' >
                    {
                        this.categories.map((category) : JSX.Element => {
                            return (
                                <CategoryCard title={category.title} icon={category.icon}  />
                            )
                        })
                    }
                </section>
            </main>
        )
    }

}

export default Catalog