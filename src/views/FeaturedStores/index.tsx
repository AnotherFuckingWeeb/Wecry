import React from 'react'
import { Helmet } from 'react-helmet' 
import { IStoreProps } from './StorePropsInterface'
import { IStoreState } from './StoreStateInterface'
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { StoreSection } from '../../components/StoreSection'
import { categories } from '../../utils/categories'
import './style.css'

class FeaturedStores extends React.Component<IStoreProps, IStoreState> {
    
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
                        categories.map((category) : JSX.Element => {
                            return (
                                <StoreSection category={category.name} />
                            )
                        })
                    }
                </section>
            </main>
        )
    }
}

export default FeaturedStores;