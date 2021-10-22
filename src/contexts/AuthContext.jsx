import { useState } from 'react'
import { api } from '../services/api'


import { createContext } from "react";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";



import 'react-toastify/dist/ReactToastify.css'

export const AuthContext = createContext({})

export function AuthContextProvider(props) {

    const [userCpfLogin, setUserCpfLogin] = useState();
    const [userSenhaLogin, setUserSenhaLogin] = useState();

    const [user, setUser] = useState();

    function handleSignIn(event) {
        event.preventDefault();

        const data = {
            userCpfLogin,
            userSenhaLogin,
        }

        api.post('/cliente/login', data)
            .then(response => {
                if (response.status == 200) {
                    console.log(response);
                    console.log('Login realizado com sucesso!')
                }
            })
            .catch((err) => {
                if (err) {
                    toast.error("Erro")
                }
            })
        console.log(data)
    }

    return (
        <AuthContext.Provider value={{ userCpfLogin, setUserCpfLogin, userSenhaLogin, setUserSenhaLogin, handleSignIn, props }}>
            {props.children}
        </AuthContext.Provider>
    )
}