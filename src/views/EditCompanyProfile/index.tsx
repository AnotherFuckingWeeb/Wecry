import React from 'react'
import { Helmet } from 'react-helmet'
import { User } from '../../utils//user'
import { IEditCompanyProfileProps } from './EditCompanyProfilePropsInterface'
import { IEditCompanyProfileState } from './EditCompanyProfileStateInterface'
import { InputText } from '../../components/InputText'
import { SearchBar } from '../../components/Navbars/SearchBar'
import { DescriptionInput } from '../../components/DescriptionInput'
import { ButtonStyleOne } from '../../components/Buttons/ButtonStyleOne'
import { EditProfileInfoCard } from '../../components/EditProfileInfoCard'
import { InputSection } from '../../components/InputSection'
import { CompanyWallpaperCard } from '../../components/EditCompanyProfile/CompanyWallpaperCard'
import { YellowForm } from '../../components/YellowForm'
import './style.css'

class EditCompanyProfile extends React.Component<IEditCompanyProfileProps, IEditCompanyProfileState> {

    private user: User = new User();

    constructor(props: IEditCompanyProfileProps) {
        super(props)

        this.state = {
            wallpaper: undefined,
            logo: undefined,
            name: '',
            email: '',
            cellphone: '',
            currentPassword: '',
            newPassword: '',
            description: ''
        }
    }

    private getLogoPreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        if (event.target.files !== null) {
            this.setState({
                logo: event.target.files[0] === undefined ? undefined : event.target.files[0]
            });
        }
    }

    private getWallpaperPreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        if (event.target.files !== null) {
            this.setState({
                wallpaper: event.target.files[0] === undefined ? undefined : event.target.files[0]
            });
        }
    }

    private onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) : void => {
        const { name, value } = event.target
    
        this.setState({
            ...this.state,
            [name] : value
        });
    }

    private onSubmit = async (event: React.FormEvent<HTMLFormElement>) : Promise<void> => {
        try {
            event.preventDefault();
            
            const url = `http://localhost:4000/editcompany/${this.user.Id}`;
            const formData = new FormData();

            if (this.state.wallpaper !== undefined) {
                formData.append("edit-wallpaper", this.state.wallpaper)
            }

            else {
                formData.append("edit-wallpaper", this.user.Wallpaper);
            }

            if (this.state.logo !== undefined) {
                formData.append("edit-logo", this.state.logo);
            }

            else {
                formData.append("edit-logo", this.user.ProfileImage);
            }

            formData.append("name", this.state.name);
            formData.append("description", this.state.description);
            formData.append("phonenumber", this.state.cellphone);
            formData.append("email", this.state.email);
            formData.append("password", this.state.newPassword);

            await fetch(url, {
                method: 'PUT',
                body: formData
            });

            alert("all done");
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    render() : JSX.Element {
        return (
            <main>
                <Helmet>
                    <title>Edit Company Profile</title>
                    <style>{'body { background-color: #ebebeb; }'}</style>
                </Helmet>
                <SearchBar/>
                <section className='edit-company-profile-container' >
                    <YellowForm onSubmit={this.onSubmit} >
                        <CompanyWallpaperCard image={this.state.wallpaper} onChange={this.getWallpaperPreview} />
                        <EditProfileInfoCard image={this.state.logo} name='Parque Costa Azul' email='parquecostaazul@outlook.com' onChange={this.getLogoPreview} />

                        <InputSection width='80%' height={100} alignItems='center' justifyContent='center'>
                            <InputText placeholder='Company name' name='name' value={this.state.name} type='text' onChange={this.onChange} />
                        </InputSection>
                        
                        <InputSection width='80%' height={100} alignItems='center' justifyContent='center'>
                            <InputText placeholder='Company email' name='email' value={this.state.email} type='email' onChange={this.onChange} />
                        </InputSection>
                        
                        <InputSection width='80%' height={100} alignItems='center' justifyContent='center'>
                            <InputText placeholder='Company cellphone' name='cellphone' value={this.state.cellphone} type='text' onChange={this.onChange} />
                        </InputSection>
                        
                        <InputSection width='80%' height={130} flexDirection='column' alignItems='center' justifyContent='space-between'>
                            <InputText placeholder='Current Password' name='currentPassword' value={this.state.currentPassword} type='text' onChange={this.onChange} />
                            <InputText placeholder='New Password' name='newPassword' value={this.state.newPassword} type='text' onChange={this.onChange} />
                        </InputSection>
                        
                        <InputSection width='80%' height={120} alignItems='center' justifyContent='center'>
                            <DescriptionInput placeholder='Company description' name='description' value={this.state.description} onChange={this.onChange} />
                        </InputSection>
                        
                        <InputSection width='80%' height={100} alignItems='center' justifyContent='center'>
                            <ButtonStyleOne title='Save Changes'  />
                        </InputSection>
                    </YellowForm>
                </section>
            </main>
        )
    }
}

export default EditCompanyProfile;