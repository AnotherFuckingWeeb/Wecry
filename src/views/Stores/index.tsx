import React from 'react'
import { Helmet } from 'react-helmet'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { Header } from '../../components/Header'
import { CompanyCard } from '../../components/CompanyCard'
import './style.css'

class Stores extends React.Component {
    render() : JSX.Element {
        return (
            <div>
                <Helmet>
                    <title>Stores</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <div className='category-store-header-container' >
                    <Header title='Store for Sports' fontSize={50} />
                </div>
                <div className='category-stores-container' >
                    <CompanyCard logo='http://localhost:3000/static/media/1604457981001.b21f8af2.jpg' wallpaper='http://localhost:3000/static/media/720433.c4e92d81.png' name='Adidas' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe pariatur odio dignissimos at dolores illo iste aspernatur, quia rem!' />
                    <CompanyCard logo='http://localhost:3000/static/media/1604457981001.b21f8af2.jpg' wallpaper='http://localhost:3000/static/media/720433.c4e92d81.png' name='Adidas' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe pariatur odio dignissimos at dolores illo iste aspernatur, quia rem!' />
                    <CompanyCard logo='http://localhost:3000/static/media/1604457981001.b21f8af2.jpg' wallpaper='http://localhost:3000/static/media/720433.c4e92d81.png' name='Adidas' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe pariatur odio dignissimos at dolores illo iste aspernatur, quia rem!' />
                    <CompanyCard logo='http://localhost:3000/static/media/1604457981001.b21f8af2.jpg' wallpaper='http://localhost:3000/static/media/720433.c4e92d81.png' name='Adidas' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit saepe pariatur odio dignissimos at dolores illo iste aspernatur, quia rem!' />
                </div>
            </div>
        )
    }
}

export default Stores;