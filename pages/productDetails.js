import Details from "components/details/details"
import { useState,useEffect } from "react";
import useResource from "hooks/useResource";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import axios from 'axios';

export default function ProductDeatils(){
    
    const { response, createResource, deleteResource } = useResource()



    const [producTitle, setproducTitle] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {

            setproducTitle(localStorage.getItem('producTitle'))
        }
    }, []);
    

    const [decodedToken, setDecodedToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
        setDecodedToken(JSON.parse(localStorage.getItem('decodedToken')))
        }
    }, []);



    const [comments , setComments] = useState()
    useEffect(() => {
        async function getComments() {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_API_RESOURCE_URL+'comment');
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getComments();
    }, []);
    



    return(
        <>
        <Navbar decodedToken={decodedToken} />
        <Details producTitle={producTitle} response={response} comments={comments} decodedToken={decodedToken}/>
        <Footer />


        </>
    )
}