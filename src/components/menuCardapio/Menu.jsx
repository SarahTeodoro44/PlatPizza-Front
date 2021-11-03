
import items from '../../pages/Cardapio/allData';
import VeganIcon from '../../assets/icons/icone_pizza_vegana.png';
import LupaPesquisar from '../../assets/icons/icone_lupa.png'
import { useState } from 'react';
import './Menu.css';
import { Button } from './Button';

import { useCart } from '../../hooks/useCart'
import { useHistory } from "react-router-dom";

import * as AiIcons from 'react-icons/ai'

export function Menu() {

    const allCategories = ['Todas', ...new Set(items.map(item => item.category))];

    const [menuItem, setMenuItem] = useState(items)
    const [buttons, setButtons] = useState(allCategories)

    const user = useCart();

    const history = useHistory();
    const filter = (button) => {

        if (button === 'Todas') {
            setMenuItem(items);
            return;
        }

        const filterdData = items.filter(item => item.category === button);
        setMenuItem(filterdData)
    }

    return (
        <div className="container">

            <Button button={buttons} filter={filter} />


           

            <br></br> <br></br> <br></br>
            <div className="item">
                <div className="row">
                    {
                        menuItem.map((product) => {
                            return (
                                <div className="col-md-4">
                                    <div className="item-con" key={product.id}>
                                        <div className="item-container">
                                            <div className="img-wrap">
                                                <img src={product.image} className="img-cardapio" alt="" />
                                                <div className="pizza-info">
                                                    <h2>{product.title}</h2>
                                                    <h3 className="preco">R${product.preco},00</h3>
                                                    <div className="pizza-pesquisar">
                                                        {/* <img src={LupaPesquisar} alt="LupaPesquisar" /> */}
                                                        <button onClick={() => user.addToCart(product)}>Adicionar ao carrinho</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}