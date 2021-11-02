import { useForm, useStep } from 'react-hooks-helper'
import { Cadastro } from './Cadastro'
import { Cadastro01 } from './Cadastro01'
import { Cadastro02 } from './Cadastro02'
import { Login } from '../Login/Login'

import { useState } from 'react'

const defaultData = {
    nomeVM: "",
    cpfVM: "",
    telefoneVM: "",
    apelidoVM: "",

    emailClienteVM: "",
    senhaVM: "",
    repetirSenha: ""
}

const steps = [
    { id: 'cadastro' },
    { id: 'cadastro01' },
    { id: 'cadastro02' },
]

export const MultiStepForm = () => {

    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0
    })
    // const [fullName2, setFullName2] = useState()



    const props = { formData, setForm, navigation }

    switch (step.id) {
        case 'cadastro':
            return <Cadastro {...props} />
        case 'cadastro01':
            return <Cadastro01 {...props} />
        case 'cadastro02':
            return <Cadastro02 {...props} />
        case 'login':
            return <Login {...props} />
    }

    // function handleSubmit(event) {
    //     event.preventDefault();

    //     console.log('aloou')
    // }

    return (
        <h1></h1>
    )
}