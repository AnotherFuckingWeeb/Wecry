import React from 'react';
import { Helmet } from 'react-helmet'
import { HomeLink } from '../../components/HomeLink'
import { BlackButtonLink } from '../../components/Buttons/BlackButtonLink'
import { Images } from '../../assets/images'
import './style.css'

class NotFoundPage extends React.Component {
    render() {
        return (
            <main className='not-found-page-main-container' >
                <Helmet>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <section className='white-section'>
                    <HomeLink />
                    <div className='white-section-text-container' >
                        <h1><span>Whoops!</span> You've moved so fast and got lost...</h1>
                        <p>The page you were looking for doesn't exist. Please check your URL for spellings or capitalizations.</p>
                        <div className='redirect-container' >
                            <img src={Images.robotError} alt="" />
                            <p>404 resource not found</p>
                            <BlackButtonLink title='Go to posts' href='/posts' />
                        </div>
                    </div>
                </section>
                <section className='not-found-page-yellow-section' >
                    <img src={Images.notFound} />
                    <img src={Images.lostGirl} />
                </section>
            </main>
        )
    }
}


export default NotFoundPage;