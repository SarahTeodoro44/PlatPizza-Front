import { createContext, useState, useEffect } from "react";

import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const CartContext = createContext({})

export function CartContextProvider(props) {

    const [cart, setCart] = useState([]);
    console.log(cart)


    useEffect(() => {
        const data = localStorage.getItem('Carrinho')
        if (data) {
            setCart(JSON.parse(data))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('Carrinho', JSON.stringify(cart))
    })


    const addToCart = (product) => {
        const exist = cart.find((x) => x.id === product.id)

        if (exist) {
            setCart(cart.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
            toast.success(`${product.title} adicionado no carrinho`)
        } else {
            setCart([...cart, { ...product, qty: 1 }])
            toast.success(`${product.title} adicionado no carrinho`)
        }

        console.log(product)
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
        <CartContext.Provider value={{ addToCart, removeFromCart, cart }} >
            {props.children}
        </CartContext.Provider>
    )
}