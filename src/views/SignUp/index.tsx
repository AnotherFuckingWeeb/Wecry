import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBriefcase, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Images } from '../../assets/images';
import { ISignUpProps } from './SignUpProps'
import { ISignUpState } from './SignUpState'
import './style.css'

class SignUp extends React.Component<ISignUpProps, ISignUpState> {
    render() : JSX.Element {
        return(
            <main className='sign-up-main-container'> 
                <section>
                    <div className='sign-up-yellow-container' >
                        <div className='sign-up-logo' >
                            <img src={Images.Logo} />
                            <h3>Wecry</h3>
                        </div>
                        <div className='sign-up-yellow-container-label' >
                            <h1>A few clicks away from creating your account</h1>
                            <p>Create your account and earn money by selling your products or stuff</p>
                        </div>
                        <div className='sign-up-box' >
                            <img src={Images.box} alt=""/>
                        </div>
                    </div>
                </section>
                <section className='sign-up'>
                    <div className='sign-up-label'>
                        <h3>Create Account</h3>
                    </div>
                    <div className='sign-up-title' >
                        <h1>Type of account</h1>
                    </div>
                    <div className='sign-up-description' >
                        <p>Choose the type of account you want to create</p>
                    </div>
                    <div className='sign-up-buttons-container' >
                        <div className='sign-up-button'>
                            <div className='sign-up-button-description-container'>
                                <div className='sign-up-button-description-icon' >
                                    <FontAwesomeIcon icon={faUsers} size='lg' />
                                </div>
                                <div className='sign-up-button-description' >
                                    <h1>User Account</h1>
                                    <p>a simple user account</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faLongArrowAltRight} size='lg' /> 
                        </div>
                        <div className='sign-up-button'>
                            <div className='sign-up-button-description-container'>
                                <div className='sign-up-button-description-icon' >
                                    <FontAwesomeIcon icon={faBriefcase} size='lg' />
                                </div>
                                <div className='sign-up-button-description' >
                                    <h1>Company Account</h1>
                                    <p>a company that sells certain products</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faLongArrowAltRight} size='lg' /> 
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default SignUp;