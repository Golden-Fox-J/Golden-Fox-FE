import { useState } from "react"
import Form from "components/form"
import { useAuth } from "context/auth"


export default function Login_form() {
    
    // const [userInf, setUserInfo] = useState([])
    const {login} = useAuth()
    async function loginHandler(event){
        event.preventDefault()
        console.log("hi")
        let userName =event.target.userName.value
        let password =event.target.password.value
        // setUserInfo([userName,password])
        login(userName,password)
  }


    return (

        <>
            <Form loginHandler={loginHandler} />

        </>
    )
}