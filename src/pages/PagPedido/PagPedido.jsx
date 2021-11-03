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







export function PagPedido() {

    const { cart, addToCart, removeFromCart, handleCadastrarPedido } = useCart();
    const itemsPrice = cart.reduce((a, c) => a + c.preco * c.qty, 0);



    const [menuBebidas, setMenuBebidas] = useState(bebidas)
    return (
        <main>
            <div className="container">
                <Header />
                <h2 className="tittle-h2">Gostaria de adicionar alguma bebida no seu pedido? </h2>
                <div className="bebidas">
                    <div className="table-responsive col-lg-12">
                        <Table striped bordered hover size="xl" responsive="md">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Bebidas:</th>
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
                                                <td>R$ {bebida.preco},00</td>
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
                                                    <img className="img-pizza" src={item.image} />
                                                </td>
                                                <td>{item.title}</td>
                                                <td>{item.qty}</td>
                                                <td>R$ {item.preco},00</td>
                                                <td>R$ {item.qty * item.preco},00</td>
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
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total:</strong> </td>
                                    <td>R$ {itemsPrice},00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <button
                        className="btn-pedido"
                        type="submit"
                        onClick={handleCadastrarPedido}
                    >

                        <img src={Finalizar} /> Finalizar Pedido
                    </button>
                </div>
            </div>
            <Footer />
        </main >
    )
}