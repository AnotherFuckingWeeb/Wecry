import React from 'react'
import { Helmet } from 'react-helmet'
import { IEditProfileProps } from './EditProfilePropsInterface'
import { IEditProfileState } from './EditProfileStateInterface'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { InputText } from '../../components/InputText'
import { Header } from '../../components/Header'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { EditProfileInfo } from '../../components/EditProfile/EditProfileInfo'
import { EditProfileInputSection } from '../../components/EditProfile/EditProfileInputSection'
import './style.css'

class EditProfile extends React.Component<IEditProfileProps, IEditProfileState> {
    
    constructor(props: IEditProfileProps) {
        super(props)

        this.state = {
            image: 'http://localhost:3000/static/media/1604457981001.b21f8af2.jpg',
            firstname: '',
            lastname: '',
            email: '',
            currentPassword: '',
            newPassword: ''
        }
    }

    onChangeState = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    
    render() :  JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>Edit Profile</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <SearchBar/>
                <section className='edit-profile-main-container'>
                    <form className='edit-profile-form-container'>
                        <div style={{marginBottom: 20}} >
                            <Header title='Edit Profile' fontSize={30} />
                        </div>
                        <EditProfileInfo image={this.state.image} fullname='Yeferson Hidalgo' email='yefersonsmarter@gmail.com' />
                        
                        <EditProfileInputSection width='80%' height={150} justifyContent='space-between' >
                            <InputText placeholder='Firstname' name='firstname' value={this.state.firstname} type='text' onChange={this.onChangeState} />
                            <InputText placeholder='Lastname' name='lastname' value={this.state.lastname} type='text' onChange={this.onChangeState} />
                        </EditProfileInputSection>
                        
                        <EditProfileInputSection width='80%' height={100} justifyContent='center' >
                            <InputText placeholder='Email' name='email' value={this.state.email} type='email' onChange={this.onChangeState} />
                        </EditProfileInputSection>

                        <EditProfileInputSection width='80%' height={150} justifyContent='space-between' >
                            <InputText placeholder='Current Password' name='currentPassword' value={this.state.currentPassword} type='text' onChange={this.onChangeState} />
                            <InputText placeholder='New Password' name='newPassword' value={this.state.newPassword} type='text' onChange={this.onChangeState} />
                        </EditProfileInputSection>
                        
                        <EditProfileInputSection width='80%' height={100} justifyContent='center' >
                            <ButtonStyleOne title='Save Changes' />
                        </EditProfileInputSection>
                    </form>
                </section>
            </main>
        )
    }
}

export default EditProfile;