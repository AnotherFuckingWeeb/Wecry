import React from 'react'
import { Helmet } from 'react-helmet'
import { IUserSignUpProps } from './UserSignUpPropsInterface'
import { IUserSignUpState } from './UserSignUpStateInterface'
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { InputText } from '../../components/InputText'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { FlagIcon } from '../../components/Flag/flag'
import { countries } from '../../utils/countries'
import { Images } from '../../assets/images'
import './style.css'

class UserSignUp extends React.Component<IUserSignUpProps, IUserSignUpState> {

    constructor(props: IUserSignUpProps) {
        super(props)

        this.state = {
            image: undefined,
            firstname: '',
            lastname: '',
            flag: 'af',
            email: '',
            password: ''
        }
    }

    private onChangeState = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        
        const { name, value } = event.target

        this.setState({
            ...this.state,
            [name] : value
        })
    }

    private onChangeCountryFlag = (event: React.ChangeEvent<HTMLSelectElement>) : void => {
        
        const { value } = event.target    
    
        this.setState({
            ...this.state,
            flag: value
        })
    }


    private getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        if (event.target.files !== null) {
            this.setState({
                ...this.state,
                image: event.target.files[0] === undefined ? undefined : URL.createObjectURL(event.target.files[0])
            })
        }
    }

    openImageFolder = () : void => {
        const input = document.getElementById('fileInput')
        
        if (input) input.click();
    }

    render() : JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>User Register</title>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <HomeNavbar/>
                <section className='user-sign-up-container-section' >
                    <div className='user-sign-up-card' >
                        <div className='user-sign-up-card-yellow-section' >
                            <div className='user-sign-up-card-yellow-section-title' >
                                <h1>Register User Account</h1>
                            </div>
                            <p>Join Us And Discover what wecry brings to you</p>
                            <img src={Images.userAccount} alt="" />
                        </div>
                        <section className='user-sign-up-card-form-section' >
                            <form>
                                <input onChange={this.getImagePreview} style={{display: 'none'}} type="file" name="" id="fileInput"/>
                                <div onClick={this.openImageFolder} className='user-sign-up-card-user-image'>
                                    <img src={this.state.image === undefined ? Images.testtwo : this.state.image} alt="" />
                                    <div className='user-sign-up-card-user-image-hover-container'>
                                        <h1>Select Image</h1>
                                    </div>
                                </div>
                                <div className='user-sign-up-card-form-input-container' >
                                    <div className='user-sign-up-card-form-input-container-input-width' >
                                        <InputText placeholder='First Name' name='firstname' value={this.state.firstname} type='text' onChange={this.onChangeState} />
                                    </div>
                                    <div className='user-sign-up-card-form-input-container-input-width'>
                                        <InputText placeholder='Lastname' name='lastname' value={this.state.lastname} type='text' onChange={this.onChangeState} />
                                    </div>
                                </div>
                                <div className='user-sign-up-card-form-select-container' >
                                    <div className='user-sign-up-card-form-select' >
                                        <select name="" id="country" onChange={this.onChangeCountryFlag} >
                                            {countries.map((country) : JSX.Element => {
                                                return(
                                                    <option value={country.code} >{country.name}</option>
                                                )
                                            })}
                                        </select>
                                        <FlagIcon code={this.state.flag} size='2x' />
                                    </div>
                                </div>
                                <div className='user-sign-up-card-form-input-container'>
                                    <div className='user-sign-up-card-form-input-container-input-width'>
                                        <InputText placeholder='Email' name='email' value={this.state.email} type='email' onChange={this.onChangeState} />
                                    </div>
                                    <div className='user-sign-up-card-form-input-container-input-width'>
                                        <InputText placeholder='Password' name='password' value={this.state.password} type='password' onChange={this.onChangeState} />
                                    </div>
                                </div>
                                <ButtonStyleOne title='Create Account' onClick={(e) => { console.log(this.state) }} />
                            </form>
                        </section>
                    </div>
                </section>
            </main>
        );
    }
}

export default UserSignUp