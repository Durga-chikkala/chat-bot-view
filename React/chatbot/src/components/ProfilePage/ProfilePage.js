import './ProfilePage.css'
import { useState,React } from 'react';
import Error from '../Error/Error';
import FrequentData from '../FrequentData/FrequentData';
import Loading from '../Loading/Loading';
import useFetch from '../useFetch/useFetch';
import ProfileCard from '../Profile/ProfileCard';
import ProfileView from '../ProfileView/ProfileView';

function ProfilePage(props) {
   console.log(props)
   var id = localStorage.getItem("id")
    const {loading,data,error}=useFetch("http://localhost:8000/chatbot/${id}","GET");
    console.log(loading,data,error)
    if(loading){
        return (
            <Loading/>
        )
    }

    if(error){
        return (
            <Error/>
        )
    }
    return (
        <ProfileView info={data}/>
    )
}


export default ProfilePage