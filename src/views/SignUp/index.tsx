import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBriefcase, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Images } from '../../assets/images';
import { ISignUpProps } from './SignUpProps'
import { ISignUpState } from './SignUpState'
import { AccountChoiceButton } from '../../components/Buttons/AccountChoiceButton'
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
                    <div className='sign-up-buttons-container'>
                        <AccountChoiceButton title='User Account' description='a simple user account' icon={faUsers}  />
                        <AccountChoiceButton title='Company Account' description='a company that sells certain product' icon={faBriefcase}  />
                    </div>
                </section>
            </main>
        )
    }
}

export default SignUp;