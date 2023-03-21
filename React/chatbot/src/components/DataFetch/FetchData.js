import { useState,React } from 'react';
import Error from '../Error/Error';
import FrequentData from '../FrequentData/FrequentData';
import Loading from '../Loading/Loading';
import useFetch from '../useFetch/useFetch';

function FetchData(props) {
   console.log(props)
    const {loading,data,error}=useFetch("http://localhost:8000/chatbot/frequentQuestions","GET");
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
        <FrequentData info={data}/>
    )
    }


export default FetchData