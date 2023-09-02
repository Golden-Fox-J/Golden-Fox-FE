import Navbar from "components/layout/Navbar"
import ProfilePage from "components/profilePage/profilePage";
import { useState } from "react"
import { useEffect } from "react";
import useResource from "hooks/useResource";




export default function Profile (){

    const [decodedToken, setDecodedToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
        setDecodedToken(JSON.parse(localStorage.getItem('decodedToken')))
        }
    }, []);




    return(
        <>
            <Navbar decodedToken={decodedToken}/>
            <ProfilePage decodedToken={decodedToken} useResource={useResource}/>
        
        </>
    )
}