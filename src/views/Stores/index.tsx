import React from 'react'
import { Helmet } from 'react-helmet' 
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { StoreSection } from '../../components/StoreSection'
import './style.css'

class Stores extends React.Component {

    private categories: Array<any> = [
        {
            title: 'Home'
        },
        {
            title: 'Cellphones'
        },
        {
            title: 'Babies'
        },
        {
            title: 'Kitchen'
        },
        {
            title: 'Sports'
        },
        {
            title: 'Clothes'
        },
        {
            title: 'PC'
        }
    ]

    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <title>Stores</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <HomeNavbar/>
                <section className='stores-header' >
                    <div className='store-banner' >
                        <h1>See the stores Wecry has for you!</h1>
                    </div>
                </section>
                <section className='stores-section-container' >
                    {
                        this.categories.map((category) : JSX.Element => {
                            return (
                                <StoreSection category={category.title} />
                            )
                        })
                    }
                </section>
            </main>
        )
    }
}

export default Stores;