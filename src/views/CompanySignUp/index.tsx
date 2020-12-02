import React from 'react'
import { Helmet } from 'react-helmet'
import { ICompanySignUpState } from './CompanySignUpStateInterface'
import { ICompanySignUpProps } from './CompanySignUpPropsInterface'
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { Images } from '../../assets/images'
import { InputText } from '../../components/InputText'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { DescriptionInput } from '../../components/DescriptionInput'
import './style.css'

class CompanySignUp extends React.Component<ICompanySignUpProps, ICompanySignUpState> {

    constructor(props: ICompanySignUpProps) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            phonenumber: '',
            description: '',
            wallpaper: undefined,
            image: undefined
        }
    }

    onChangeState = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name] : value
        })
    }

    openImageFolder = (id: string) : void => {
        const input = document.getElementById(id);

        if (input) input.click();
    }

    getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name } = event.target;

        if (event.target.files !== null) {
            this.setState({
                ...this.state,
                [name]: event.target.files[0] === undefined ? undefined : URL.createObjectURL(event.target.files[0])
            })
        }

    }

    render() : JSX.Element {
        return (
            <main>
               <Helmet>
                   <title>Company Register</title>
                    <style>{'body { background-color: #eceff1; }'}</style>
                </Helmet>
                <HomeNavbar/>
                <section className='company-signup-container-section' >
                    <div className='company-signup-card'>
                        <div className='company-signup-card-yellow-section'>
                            <h1>Create Company Account</h1>
                            <p>Bring life to your company and give the best user experience with your wecry account</p>
                            <img src={Images.companyAccount} alt="" />
                        </div>
                        <form className='company-signup-card-form' >
                            <input onChange={this.getImagePreview} style={{display: 'none'}} type="file" name="wallpaper" id="wallpaper"/>
                            <input onChange={this.getImagePreview} style={{display: 'none'}} type="file" name="image" id="image"/>
                            <div onClick={() => { this.openImageFolder('wallpaper') }} className='company-signup-card-form-wallpaper'>
                                <div className='company-signup-card-form-wallpaper-hover-container' >
                                    <h1>Select Image</h1>
                                </div>
                                <img className='company-signup-card-form-wallpaper-img' src={this.state.wallpaper ? this.state.wallpaper :  Images.wallpapertest} alt=""/>
                                <div onClick={() => { this.openImageFolder('image') }} className='company-signup-card-form-company-image'>
                                    <img src={this.state.image ? this.state.image :  Images.testtwo} alt=""/>
                                    <div className='company-signup-card-form-company-image-hover-container' >
                                        <h1>Select Image</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='company-signup-card-form-input-container' >
                                <div className='company-signup-card-form-input-container-input-width' >
                                    <InputText placeholder='Company Name' name='name' value={this.state.name} type='text' onChange={this.onChangeState}/>
                                </div>
                                <div className='company-signup-card-form-input-container-input-width' >
                                    <InputText placeholder='Company Email' name='email' value={this.state.email} type='text' onChange={this.onChangeState}/>
                                </div>
                            </div>
                            <div className='company-signup-card-form-input-container' >
                                <div className='company-signup-card-form-input-container-input-width' >
                                    <InputText placeholder='Password' name='password' value={this.state.password} type='password' onChange={this.onChangeState}/>
                                </div>
                                <div className='company-signup-card-form-input-container-input-width' >
                                    <InputText placeholder='Company Phone number' name='phonenumber' value={this.state.phonenumber} type='text' onChange={this.onChangeState}/>
                                </div>
                            </div>
                            <div className='company-signup-card-form-textarea-container' >
                                <DescriptionInput placeholder='Add a description...' name='description' value={this.state.description} onChange={this.onChangeState}  />
                            </div>
                            <ButtonStyleOne title='Create Account' onClick={(e) => {  }} />
                        </form>
                    </div>
                </section>
            </main>
        );
    }
}


export default CompanySignUp