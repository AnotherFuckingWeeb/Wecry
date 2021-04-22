import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { IHomeState } from './HomeStateInterface'
import { IHomeProps } from './HomePropsInterface'
import { Images } from '../../assets/images'
import { CompanyCard } from '../../components/CompanyCard'
import { UserCard } from '../../components/UserCard'
import { HomeLink } from '../../components/HomeLink'
import { BlackButtonLink } from '../../components/Buttons/BlackButtonLink'
import './style.css'

class Home extends React.Component<IHomeProps, IHomeState> {

    constructor(props: IHomeProps) {
        super(props);

        this.state =  {
            users: [],
            companies: []
        }
    }

    private Links : Array<object> = [
        {
            text: "Catalog",
            href: "/catalog"
        },
        {
            text: "Featured Stores",
            href: "/stores/featured"
        },
        {
            text: "Login",
            href: "/login"
        },
        {
            text: "SignUp",
            href: "/signup"
        }
    ]

    private getFeedback = async () : Promise<void> => {
        const url = `http://localhost:4000/home`

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        this.setState({
            ...this.state,
            users: data.feedback.users,
            companies: data.feedback.companies
        });
    }
    
    async componentDidMount() {
        await this.getFeedback();
    }


    render() : JSX.Element {
        return(
            <main>
                <Helmet>
                    <title>Wecry</title>
                </Helmet>
                <header className='home-navbar' >
                    <div className='home-navbar-logo' >
                        <HomeLink/>
                    </div>
                    <nav className='home-navbar-nav' >
                        <ul>
                            {
                                this.Links.map((link: any) : JSX.Element => {
                                    return(
                                        <li>
                                            <Link to={link.href}>{link.text}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </header>
                <section className='section' >
                    <div className='yellow-card'>
                        <div className='yellow-card-image-container'>
                            <img src={Images.Urban}/>
                        </div>
                        <div className='yellow-card-title' >
                            <h2>Buy Anything Sell Anything</h2>
                            <div className='yellow-card-description'>
                                <p>Wecry is the website that allows you to get rid of those things that you no longer use and earn money for it! From that old bike to your TV you bought last year, there is nothing wecry won't let you sell. If selling is not enough for you, you can also buy the things that other people (and companies) have for sale.</p>
                            </div>
                            <BlackButtonLink title='Sign Up' href='/signup' />
                        </div>
                    </div>
                </section>
                <section className='section-color-one'>
                    <div className='section-container'>
                        <div className='section-container-img-container'>
                            <img src={Images.HomeSafety}/>
                        </div>
                        <div className='section-container-description'>
                            <h2>Buy And Sell From Home Safety</h2>
                            <div className='description-container'>
                                <p>Wecry, as it is not a physical market, provides you with a unique digital commerce experience where the only way to do business is through the internet, agreeing with the person you are trading.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-color-two' >
                    <div className='section-container' >
                        <div className='section-container-description'>
                            <h2>Track The Commerce Flow Everywhere</h2>
                            <div className='description-container' >
                                <p>Going shopping, walking the dog, a walk to the park or even at work or on a business trip, you can follow the flow of marketing your product or buy products for sale wherever you are from your phone, laptop or computer</p>
                            </div>
                        </div>
                        <div className='section-container-img-container'>
                            <img src={Images.TrackEveryWhere}/>
                        </div>
                    </div>
                </section>
                <section className='section-color-three' >
                    <div className='carousel-container'>
                        <h2>Big Companies And Small Business Love Wecry!</h2>
                        <div className='description-container'>
                            <p>From mass companies to small entrepreneurial businesses, Wecry is for everyone!</p>
                        </div>
                        <div className='carousel'>
                            {
                                this.state.companies.map((company: any) : JSX.Element => {
                                    return(
                                        <CompanyCard id={company.id} wallpaper={company.wallpaper} logo={company.profile_image} name={company.firstname} description={company.comment} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <section className='section-color-four'>
                    <div className='user-opinion-container' >
                        <h2>See what our users say about Wecry</h2>
                        <div className='description-container'>
                            <p>Our users has dedicated a few words about how satisfied they are with Wecry</p>
                        </div>
                        <div className='user-opinion-carousel'>
                            {
                                this.state.users.map((user: any) : JSX.Element => {
                                    return (
                                        <UserCard key={user.id} id={user.id} name={`${user.firstname} ${user.lastname}`} picture={user.profile_image} country={user.country} description={user.comment} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <footer>
                    <HomeLink/>
                    <div className='feedback-container'>
                        <h2>Love Wecry?</h2>
                        <BlackButtonLink title='Give Us Feedback' href='/feedback' />
                    </div>
                </footer>
            </main>
        )
    }
}

export default Home;

