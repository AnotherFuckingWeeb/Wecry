import React from 'react'
import { IEditProfileInfoProps } from './EditProfileInfoPropsInterface'
import { Header } from '../Header'
import { User } from '../../utils/user'


export const EditProfileInfoCard = (props: IEditProfileInfoProps) : JSX.Element => {

    const user : User = new User();

    const openImageFolder = () : void => {
        const input = document.getElementById('edit-profile');

        if (input) input.click();
    }

    const getImagePreview = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        props.onChange(event);
    }

    return (
        <div style={{ width: 180, height: 180, borderRadius: 5, backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }} >
            <input style={{ display: 'none' }} type="file" name="edit-logo" id="edit-profile" onChange={getImagePreview} />
            <img onClick={openImageFolder} style={{ width: 100, height: 100, borderRadius: '100%', marginBottom: 10 }} src={props.image ? URL.createObjectURL(props.image) : user.ProfileImage} alt="" />
            <Header title={props.name} fontSize={15} />
            <p style={{ marginTop: 10, fontSize: 11, color: 'rgba(0, 0, 0, 0.5)' }} >( {props.email} )</p>
        </div>
    )
}