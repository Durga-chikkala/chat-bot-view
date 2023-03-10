import { useState } from "react";


export const useToken=()=>{
    const [token,setTokenInternal]=useState(()=>{
        localStorage.getItem("token");
    })

    const setToken = updatedToken =>{
        localStorage.setItem("token",updatedToken);
        setTokenInternal(updatedToken);
    }

    return [token,setToken];
}