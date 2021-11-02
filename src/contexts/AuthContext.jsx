import { useState, useEffect } from 'react'
import { api } from '../services/api'
import { useHistory, withRouter, Redirect } from "react-router-dom";

import { createContext } from "react";
import { toast } from "react-toastify";



import 'react-toastify/dist/ReactToastify.css'

export const AuthContext = createContext({})

export function AuthContextProvider(props) {

    const [userCpfLogin, setUserCpfLogin] = useState('');
    const [userSenhaLogin, setUserSenhaLogin] = useState('');

    const [user, setUser] = useState({});
    const [isUserLogged, setIsUserLogged] = useState(false);


    const history = useHistory();




    useEffect(() => {
        const data = localStorage.getItem('User-Dados')
        if (data) {
            setUser(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('User-Dados', JSON.stringify(user))
    })



    function handleSignIn(event) {
        event.preventDefault();

        const data = {
            userCpfLogin,
            userSenhaLogin,
        }
        const login = api.post('/cliente/login', data)
            .then(response => {
                if (response.status == 200) {
                    // console.log(response);
                    // console.log(response.data)
                    console.log('Login realizado com sucesso!')
                    const { nomeVM, cpfVM, idClienteVM } = response.data;
                    setUser({
                        id: idClienteVM,
                        nome: nomeVM,
                        cpf: cpfVM,
                    })
                    setIsUserLogged(true);
                    toast.success("Login realizado com sucesso!")
                    history.push('/home')
                }

            })
            .catch((err) => {
                if (err) {
                    console.log(err)
                    toast.error("Login inválido")
                }
            })
    }

    function handleLogout() {
        localStorage.removeItem('User-Dados');
        setIsUserLogged(false);
        history.push('/login')
        setUserCpfLogin('')
        setUserSenhaLogin('')
    }

    return (
        <AuthContext.Provider value={{ user, userCpfLogin, setUserCpfLogin, userSenhaLogin, setUserSenhaLogin, handleSignIn, isUserLogged, props, handleLogout }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export default withRouter(AuthContextProvider);