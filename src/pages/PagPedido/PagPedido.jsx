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


import "./PagPedido.css"

export function PagPedido() {
    return (
        <main>
            <div className="container">
                <Header />
                <div class="imgpizza">
                    <img src={Imagem02} width='400px' height="250px"/>
                    <div class="detalhesPizza">
                        <span class="nomePizza">NOME DA PIZZA</span>
                        <span class="categoria">CATEGORIA: vegetariana</span>
                        <span class="valor">R$15,00</span>
                        <button class="btn-adc" type="submit"> + Adicionar ao carrinho</button>    
                    </div>
                </div>

                <div class="bebidas">
                    <div class="table-responsive col-lg-12">
                        <Table striped bordered hover size="xl" responsive="md">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Adicionar Bebidas:</th>
                                    <th>Qtd</th>
                                    <th>Preço</th>
                                    <th>Preço Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={bebida01}/></td>
                                    <td>Suco Natural</td>
                                    <td>1</td>
                                    <td>99,99</td>
                                    <td>99,99</td>
                                    <td><button class="btn-tabela" type="submit"> + </button></td>
                                </tr>
                                <tr>
                                    <td><img src={bebida02}/></td>
                                    <td>Brahma 350ml</td>
                                    <td>2</td>
                                    <td>99,99</td>
                                    <td>99,99</td>
                                    <td><button class="btn-tabela" type="submit"> + </button></td>
                                </tr>
                                <tr>
                                    <td><img src={bebida01}/></td>
                                    <td>Suco Natural</td>
                                    <td>1</td>
                                    <td>99,99</td>
                                    <td>99,99</td>
                                    <td><button class="btn-tabela" type="submit"> + </button></td>
                                </tr>
                                <tr>
                                    <td><img src={bebida02}/></td>
                                    <td>Brahma 350ml</td>
                                    <td>1</td>
                                    <td>99,99</td>
                                    <td>99,99</td>
                                    <td><button class="btn-tabela" type="submit"> + </button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>

                <div class="carrinho">
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" bg="dark" ><img src={Carrinho}/><span class="seuCarrinho">SEU CARRINHO</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <div class="table-responsive col-lg-12">
                                    <Table striped bordered hover size="sm" responsive="md">
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
                                            <tr>
                                                <td><img src={Imagem02} width="85px" height="80px"/></td>
                                                <td>Pizza Calabresa</td>
                                                <td>1</td>
                                                <td>99,99</td>
                                                <td>99,99</td>
                                                <td><button class="btn-tabela" type="submit"> + </button></td>
                                            </tr>
                                            <tr>
                                                <td><img src={bebida02}/></td>
                                                <td>Brahma 350ml</td>
                                                <td>2</td>
                                                <td>99,99</td>
                                                <td>99,99</td>
                                                <td><button class="btn-tabela" type="submit"> + </button></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td><strong>Total:</strong> </td>
                                                <td>R$35,00</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <button class="btn-pedido" type="submit"><img src={Finalizar}/> Finalizar Pedido </button>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>                         
                </div>
            </div>
            <Footer/>
        </main>
    )
}