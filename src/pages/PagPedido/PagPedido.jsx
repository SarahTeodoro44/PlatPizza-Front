import { useState } from 'react'
import bebidas from '../Cardapio/allBebidas'
import { useCart } from '../../hooks/useCart'


import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"
import Imagem02 from '../../assets/images/Imagem02.png';
import Table from 'react-bootstrap/Table'
import bebida01 from '../../assets/images/bebida01.png';
import bebida02 from '../../assets/images/bebida02.png';
import Carrinho from '../../assets/icons/Shopping-Cart.png';
import Finalizar from '../../assets/icons/Buy_Icon.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton'
import $ from 'jquery'
import "./PagPedido.css"





$("#button").click(function () {
    $('').animate({
        scrollTop: $("#anchor").offset().top
    }, 2000);
});

export function PagPedido() {

    const { cart, addToCart, removeFromCart } = useCart();
    const itemsPrice = cart.reduce((a, c) => a + c.preco * c.qty, 0);

    const [maisCounter, setMaisCounter] = useState();
    const [menosCounter, setMenosCounter] = useState();


    const [menuBebidas, setMenuBebidas] = useState(bebidas)
    return (
        <main>
            <div className="container">
                <Header />
                <div className="imgpizza">
                    <img src={Imagem02} width='400px' height="250px" />
                    <div className="detalhesPizza">
                        <span className="nomePizza">NOME DA PIZZA</span>
                        <span className="categoria">CATEGORIA: vegetariana</span>
                        <span className="valor">R$15,00</span>
                        <a href="#anchor"><button className="btn-adc" type="submit"> + Adicionar ao carrinho</button></a>

                    </div>
                </div>

                <div className="bebidas">
                    <div className="table-responsive col-lg-12">
                        <Table striped bordered hover size="xl" responsive="md">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Adicionar Bebidas:</th>
                                    <th>Preço</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menuBebidas.map((bebida) => {
                                        return (
                                            <tr key={bebida.id}>
                                                <td><img src={bebida.image} /></td>
                                                <td>{bebida.title}</td>
                                                <td>R$ {bebida.preco}</td>
                                                {/* <td>R$ 99,99</td> */}
                                                <td>
                                                    <div className="btn-add-wrap">
                                                        <button
                                                            className="btn-tabela"
                                                            onClick={() => {
                                                                addToCart(bebida)
                                                            }}
                                                        >
                                                            +
                                                        </button>
                                                        <button
                                                            className="btn-tabela-menos"
                                                            onClick={() => removeFromCart(bebida)}
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })

                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="seuCarrinho">
                    <img src={Carrinho} /><span className="car">SEU CARRINHO </span>
                </div>
                <div className="carrinho" id="anchor">
                    <div className="table-responsive col-lg-12">
                        <Table striped bordered hover size="xl" responsive="md">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Itens:</th>
                                    <th>Qtd</th>
                                    <th>Preço</th>
                                    <th>Preço Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <img src={item.image} width="85px" height="80px" />
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.qty}</td>
                                                <td>R$ {item.preco}</td>
                                                <td>R$ {item.qty * item.preco}</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-default btn-circle"
                                                        onClick={() => {
                                                            removeFromCart(item)
                                                        }}
                                                    >
                                                        X
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                                {/* <tr>
                                    <td><img src={bebida02} /></td>
                                    <td>Brahma 350ml</td>
                                    <td>2</td>
                                    <td>99,99</td>
                                    <td>99,99</td>
                                    <td><button type="button" class="btn btn-default btn-circle">X</button></td>
                                </tr> */}
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total:</strong> </td>
                                    <td>R$ {itemsPrice}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <button className="btn-pedido" type="submit"><img src={Finalizar} /> Finalizar Pedido </button>
                </div>
            </div>
            <Footer />
        </main >
    )
}