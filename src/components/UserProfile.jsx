import React from "react";
import {useParams} from "react-router-dom";
import Navbar from "./Navbar";
import Image from '../assets/img/image.webp'


function UserProfile() {

    let {username} = useParams();

    return (
        <>
            <Navbar/>
            <div className='container-column'>
                <img src={Image} alt="Profile" className="profile-picture"/>
                <h2>Perfil de Usuario</h2>
                <p>Id del Usuario: {username}</p>
            </div>
        </>
    )
}

export default UserProfile;