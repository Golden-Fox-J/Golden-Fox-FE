import { useState } from "react"

import Login_form from "./login";
import Form from "@/components/form";
import CreateProductForm from "@/components/CreateProductForm";
import { useAuth } from "@/context/auth";


export default function Home() {
  const { login,user } = useAuth()
  




  return (
    <>
      
      <h1 >Home Page</h1>
      <p>{user}</p>
      {console.log(33333,user)}
      <CreateProductForm/>
      
    </>
  )
}