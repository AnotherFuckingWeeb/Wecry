import React from 'react'
import { Helmet } from 'react-helmet'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { InputText } from '../../components/InputText'
import { Header } from '../../components/Header'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { EditProfileInfo } from '../../components/EditProfile/EditProfileInfo'
import { EditProfileInputSection } from '../../components/EditProfile/EditProfileInputSection'
import './style.css'

class EditProfile extends React.Component {
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
                        <EditProfileInfo image='http://localhost:3000/static/media/1604457981001.b21f8af2.jpg' fullname='Yeferson Hidalgo' email='yefersonsmarter@gmail.com' />
                        
                        <EditProfileInputSection width='80%' height={150} justifyContent='space-between' >
                            <InputText placeholder='Firstname' name='' value='' type='text' onChange={() => {}} />
                            <InputText placeholder='Lastname' name='' value='' type='text' onChange={() => {}} />
                        </EditProfileInputSection>
                        
                        <EditProfileInputSection width='80%' height={100} justifyContent='center' >
                            <InputText placeholder='Email' name='' value='' type='email' onChange={() => {}} />
                        </EditProfileInputSection>

                        <EditProfileInputSection width='80%' height={150} justifyContent='space-between' >
                            <InputText placeholder='Current Password' name='' value='' type='text' onChange={() => {}} />
                            <InputText placeholder='New Password' name='' value='' type='text' onChange={() => {}} />
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