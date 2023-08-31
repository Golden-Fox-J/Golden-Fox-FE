import Navbar from "components/layout/Navbar"
import ProfilePage from "components/profilePage/profilePage";
import { useState } from "react"
import { useEffect } from "react";




export default function Account (){

    const [decodedToken, setDecodedToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
        setDecodedToken(JSON.parse(localStorage.getItem('decodedToken')))
        }
    }, []);




    return(
        <>
            <Navbar decodedToken={decodedToken}/>
            <ProfilePage />
            
        
        </>
    )
}