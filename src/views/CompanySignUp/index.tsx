import React from 'react'
import { Helmet } from 'react-helmet'
import { ICompanySignUpState } from './CompanySignUpStateInterface'
import { ICompanySignUpProps } from './CompanySignUpPropsInterface'
import { HomeNavbar } from '../../components/Navbars/HomeNavbar'
import { Images } from '../../assets/images'
import { InputText } from '../../components/InputText'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { DescriptionInput } from '../../components/DescriptionInput'
import { Loading } from '../../components/Loading'
import './style.css'
import { categories } from '../../utils/categories'
import { NotificationPopUp } from '../../components/NotificationPopUp'
import { CategorySelect } from '../../components/CategorySelect'

const InitialState = {
    name: '',
    email: '',
    password: '',
    phonenumber: '',
    description: '',
    category: '',
    message: '',
    wallpaper: undefined,
    logo: undefined,
    loading: false,
    isError: false,
    formErrors: {
        name: '',
        email: '',
        password: '',
        phonenumber: '',
        category: '',
        description: ''
    }
}

class CompanySignUp extends React.Component<ICompanySignUpProps, ICompanySignUpState> {

    constructor(props: ICompanySignUpProps) {
        super(props)

        this.state = InitialState;
    }

    private onChangeState = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) : void => {
        const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name] : value
        })
    }

    private openImageFolder = (id: string) : void => {
        const input = document.getElementById(id);

        if (input) input.click();
    }

    private getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name } = event.target;

        if (event.target.files !== null) {
            this.setState({
                ...this.state,
                [name]: event.target.files[0] === undefined ? undefined : event.target.files[0]
            })
        }
    }

    private isValidEmail = () : boolean => {
        let validEmail = this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        
        if (this.state.email === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    email: 'Email field cannot be empty'
                }
            })

            return false;
        }

        if (!validEmail) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    email: 'Please enter a valid email adress'
                }
            })

            return false;
        }

        else return true;
    }

    private isValidPassword = () : boolean => {
        if (this.state.password === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    password: 'Password field cannot be empty'                    
                }
            });

            return false;
        }

        else if (this.state.password.length < 8) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    password: 'Password must be at least 8 characters length'                    
                }
            });

            return false;
        }

        else if (this.state.password.length > 15) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    password: 'Password must not exceed 15 characters length'                    
                }
            });

            return false;
        }

        else return true;
    }

    private isValidPhonenumber = () : boolean => {
        const validPhonenumber = this.state.phonenumber.match(/^\d{10}$/);

        if (this.state.phonenumber === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    phonenumber: 'Phonenumber field cannot be empty'
                }
            })

            return false;
        }

        else if (!validPhonenumber) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    phonenumber: 'Please enter a valid phonenumber'
                }
            })

            return false;
        }

        else return true;
    }

    private isValidName = () : boolean => {
        if (this.state.name === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    name: 'Company Name field cannot be empty'
                }
            })

            return false;
        }

        else if (this.state.name.length > 32) {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    name: 'Name must no exceed 32 characters length'
                }
            })

            return false;
        }

        else return true;
    }

    private isValidCategory = () : boolean => {
        if (this.state.category === '') {
            this.setState({
                ...this.state,
                formErrors: {
                    ...this.state.formErrors,
                    category: 'Category cannot be empty'
                }
            })

            return false;
        }

        else return true;
    }

    private isValidWallPaperAndLogo = () : boolean => {
        const { wallpaper, logo } = this.state
        
        if (!wallpaper) {
            this.setState({
                message: 'Wallpaper cannot be empty',
                isError: true
            });

            return false;
        }
        
        if (!logo) {
            this.setState({
                message: 'Logo cannot be empty',
                isError: true
            })

            return false;
        }

        else return true;

    }

    private isValid = () : boolean => {
        const { isValidName, isValidEmail, isValidPassword, isValidPhonenumber, isValidCategory, isValidWallPaperAndLogo } = this

        return (isValidName() && isValidEmail() && isValidPassword() && isValidPhonenumber() && isValidCategory() && isValidWallPaperAndLogo());
    }

    private cleanErrors = (field: string) : void => {
        this.setState({
            ...this.state,
            formErrors: {
                ...this.state.formErrors,
                [field] : ''
            }
        });
    }

    private signUp = async () : Promise<any> => {
        const url = 'http://localhost:4000/companysignup';
        const formData = new FormData();

        formData.append("wallpaper", this.state.wallpaper);
        formData.append("logo", this.state.logo);
        formData.append("name", this.state.name);
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        formData.append("phonenumber", this.state.phonenumber);
        formData.append("description", this.state.description);
        formData.append("category", this.state.category);

        const request = await fetch(url, {
            method: 'POST',
            body: formData
        });

        return request.json()
    } 

    private onSubmit = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {
        try {
            event.preventDefault();

            if (this.isValid()) {
    
                this.setState({ loading: true });
    
                const response = await this.signUp();
            
                this.setState({
                    loading: false,
                    message: response.msg,
                    isError: response.error
                });
            }    
        } 
        
        catch (error) {
            this.setState({
                loading: false,
                message: 'Something went wrong',
                isError: true
            });
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
                            <h1>Register Company Account</h1>
                            <p>Bring life to your company and give the best user experience with your wecry account</p>
                            <img src={Images.companyAccount} alt="" />
                        </div>
                        <div className='company-signup-form' >
                            <Loading isLoading={this.state.loading} />
                            <form onSubmit={this.onSubmit} encType="multipart/form-data">
                                <input onChange={this.getImagePreview} style={{display: 'none'}} type="file" name="wallpaper" id="wallpaper"/>
                                <input onChange={this.getImagePreview} style={{display: 'none'}} type="file" name="logo" id="image"/>
                                <div onClick={() => { this.openImageFolder('wallpaper') }} className='company-signup-card-form-wallpaper'>
                                    <div className='company-signup-card-form-wallpaper-hover-container' >
                                        <h1>Select Wallpaper</h1>
                                    </div>
                                    <img className='company-signup-card-form-wallpaper-img' src={this.state.wallpaper ? URL.createObjectURL(this.state.wallpaper) :  Images.wallpaperPlaceholder} alt=""/>
                                </div>
                                <div onClick={() => { this.openImageFolder('image') }} className='company-signup-card-form-company-image'>
                                    <img src={this.state.logo ? URL.createObjectURL(this.state.logo) :  Images.companyPicPlaceholder} alt=""/>
                                    <div className='company-signup-card-form-company-image-hover-container' >
                                        <h1>Select Logo</h1>
                                    </div>
                                </div>
                                <div className='company-signup-card-form-input-container' >
                                    <div className='company-signup-card-form-input-container-input-width' >
                                        <InputText placeholder='Company Name' name='name' value={this.state.name} type='text' onChange={this.onChangeState} validate={this.state.formErrors.name} onFocus={() => this.cleanErrors('name')} />
                                    </div>
                                    <div className='company-signup-card-form-input-container-input-width' >
                                        <InputText placeholder='Company Email' name='email' value={this.state.email} type='text' onChange={this.onChangeState} validate={this.state.formErrors.email} onFocus={() => this.cleanErrors('email')} />
                                    </div>
                                </div>
                                <div className='company-signup-card-form-input-container' >
                                    <div className='company-signup-card-form-input-container-input-width' >
                                        <InputText placeholder='Password' name='password' value={this.state.password} type='password' onChange={this.onChangeState} validate={this.state.formErrors.password} onFocus={() => this.cleanErrors('password')} />
                                    </div>
                                    <div className='company-signup-card-form-input-container-input-width' >
                                        <InputText placeholder='Company Phone number' name='phonenumber' value={this.state.phonenumber} type='text' onChange={this.onChangeState} validate={this.state.formErrors.phonenumber} onFocus={() => this.cleanErrors('phonenumber')} />
                                    </div>
                                </div>
                                <div className='company-signup-card-form-select-container'>
                                    <CategorySelect onChange={this.onChangeState} validate={this.state.formErrors.category} onFocus={() => this.cleanErrors('category')} />
                                </div>
                                <div className='company-signup-card-form-textarea-container' >
                                    <DescriptionInput placeholder='Add a description...' name='description' value={this.state.description} onChange={this.onChangeState} validate='' />
                                </div>
                                <ButtonStyleOne title='Create Account' />
                            </form>
                        </div>
                    </div>
                </section>
                { this.state.message && <NotificationPopUp msg={this.state.message} isError={this.state.isError} close={() => this.setState({ message: '' })} /> }
            </main>
        );
    }
}


export default CompanySignUp