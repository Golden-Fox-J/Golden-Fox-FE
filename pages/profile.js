
import Navbar from "components/layout/Navbar"
import ProfilePage from "components/profilePage/profilePage";
import { useState } from "react"
import { useEffect } from "react";
import useResource from "hooks/useResource";
import Footer from "components/layout/Footer";
import About from "components/profilePage/about"




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
            <About />
            {/* <ProfilePage decodedToken={decodedToken} useResource={useResource}/> */}
            <Footer />
        </>
    )
}

