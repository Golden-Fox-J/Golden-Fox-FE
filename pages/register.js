import React, { useState, useEffect } from 'react';
import { useAuth } from "context/auth"
import LoginForm from "components/register/registerForm"

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [csrfToken, setCsrfToken] = useState("");

    useEffect(() => {
        const csrfTokenInput = document.querySelector('input[name="csrfmiddlewaretoken"]');
        const token = csrfTokenInput ? csrfTokenInput.value : null;
        setCsrfToken(token);
    }, []);

    const url = process.env.NEXT_PUBLIC_URL_Signup;

    const registrationHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ username, email, password, retypePassword }),
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
            });

            const data = await response.json(); // Corrected: add await

            console.log("777", data);

            if (response.ok) {
                console.log("Registration successful");
            } else {
                const responseData = await response.json();
                console.error("Registration failed:", responseData.error);
                console.log("777", data);
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <LoginForm registrationHandler ={registrationHandler }/>
    );
};

export default RegistrationForm;
