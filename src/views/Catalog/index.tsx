import React from 'react'
import { Helmet } from 'react-helmet'
import { faHouseUser, faMobileAlt, faBaby, faUtensils, faTshirt, faFutbol, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { Header } from '../../components/Header'
import { CategoryCard } from '../../components/CategoryCard'

class Catalog extends React.Component {

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
                <div style={{marginTop: 100, textAlign: 'center', color: '#3483fa', marginBottom: 100}} >
                    <Header title='See our catalog' fontSize={60} />
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20}} >
                    {
                        this.categories.map((category) => {
                            return (
                                <CategoryCard title={category.title} icon={category.icon}  />
                            )
                        })
                    }
                </div>
            </main>
        )
    }

}

export default Catalog