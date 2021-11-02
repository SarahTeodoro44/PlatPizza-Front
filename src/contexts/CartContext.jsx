import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import { useAuth } from '../hooks/useAuth'

export const CartContext = createContext({})

export function CartContextProvider(props) {

    const [cart, setCart] = useState([]);

    const [pedidosFinal, setPedidosFinal] = useState([]);


    const { user, isUserLogged } = useAuth();

    const history = useHistory();
    console.log(pedidosFinal)

    useEffect(() => {
        const data = localStorage.getItem('Carrinho')
        if (data) {
            setCart(JSON.parse(data))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('Carrinho', JSON.stringify(cart))
    })


    function handleCadastrarPedido() {

        if (isUserLogged === true) {
            setPedidosFinal([...pedidosFinal, cart])
            history.push("/pagrastreio");
        } else {
            history.push("/login")
            toast.error("Você precisa estar logado")
        }




    }

    const addToCart = (product) => {
        const exist = cart.find((x) => x.id === product.id)

        if (exist) {
            setCart(cart.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
            toast.success(`${product.title} adicionado no carrinho`)
        } else {
            setCart([...cart, { ...product, qty: 1 }])
            toast.success(`${product.title} adicionado no carrinho`)
        }

    }

    const removeFromCart = (product) => {
        const exist = cart.find((x) => x.id === product.id)

        if (exist.qty === 1) {
            setCart(cart.filter((x) => x.id !== product.id))
        } else {
            setCart(cart.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }



    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, cart, handleCadastrarPedido }} >
            {props.children}
        </CartContext.Provider>
    )
}