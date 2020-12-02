import React from 'react'
import { faUsers, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { Images } from '../../assets/images';
import { ISignUpProps } from './SignUpPropsInterface'
import { ISignUpState } from './SignUpStateInterface'
import { AccountChoiceButtonLink } from '../../components/Buttons/AccountChoiceButton'
import { HomeLink } from '../../components/HomeLink'
import './style.css'

class SignUp extends React.Component<ISignUpProps, ISignUpState> {
    
    render() : JSX.Element {
        return(
            <main className='sign-up-main-container'> 
                <section>
                    <div className='sign-up-yellow-container' >
                        <HomeLink/>
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
                    <div className='sign-up-buttons-container'>
                        <AccountChoiceButtonLink href='useregister' title='User Account' description='a simple user account' icon={faUsers} />
                        <AccountChoiceButtonLink href='companyregister' title='Company Account' description='a company that sells certain product' icon={faBriefcase} />
                    </div>
                </section>
            </main>
        )
    }
}

export default SignUp;