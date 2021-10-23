import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"
import React, { useState } from "react";
import "./PagRastreio.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import Table from 'react-bootstrap/Table'
import bebida01 from '../../assets/images/bebida01.png';
import bebida02 from '../../assets/images/bebida02.png';

export function PagRastreio() {
  const [progress, setProgress] = useState(75);
  return (
    <div class="container">
        <Header />
        <div>
            <p class="ped">Pedido #000000</p>
        </div>
            <div className="App">
                <ProgressBar percent={progress}>
                    <Step>
                        {({ accomplished, index }) => (
                            <>
                            <div
                                className={`indexedStep ${
                                accomplished ? "accomplished" : null
                                }`}
                            >
                                {index + 1}
                            </div>
                            <div className={"test"}>Pedido Criado</div>
                            <div className={"test01"}>31 de dez de 2021 às 23:59h</div>
                            </>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <>
                            <div
                                className={`indexedStep ${
                                accomplished ? "accomplished" : null
                                }`}
                            >
                                {index + 1}
                            </div>
                            <div className={"test"}>Pedido em andamento</div>
                            <div className={"test01"}>31 de dez de 2021 às 23:59h</div>
                            </>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <>
                            <div
                                className={`indexedStep ${
                                accomplished ? "accomplished" : null
                                }`}
                            >
                                {index + 1}
                            </div>
                            <div className={"test"}>Saiu para entrega</div>
                            <div className={"test01"}>31 de dez de 2021 às 23:59h</div>
                            </>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <>
                            <div
                                className={`indexedStep ${
                                accomplished ? "accomplished" : null
                                }`}
                            >
                                {index + 1}
                            </div>
                            <div className={"test"}>Pedido Entregue</div>
                            <div className={"test01"}>31 de dez de 2021 às 23:59h</div>
                            </>
                        )}
                    </Step>
                </ProgressBar>
            </div>
        
        <div>
            <button class="btn-call-entregador"type="submit"> Ligar para Entregador </button>  
            <button class="btn-call"type="submit"> Ligar para Estabelecimento </button>  
        </div>    
       
        <div class="pedidos01">
            <div class="table-responsive col-lg-12">
                <Table striped bordered hover size="xl" responsive="md">
                    <thead>
                        <tr>
                            <th>Itens</th>
                            <th>Qtd</th>
                            <th>Preço</th>
                            <th>Preço Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={bebida01}/></td>
                            <td>Suco Natural</td>
                            <td>1</td>
                            <td>R$99,99</td>
                            <td>R$99,99</td>
                            <td><button class="btn-tabela" type="submit"> + </button></td>
                        </tr>
                        <tr>
                            <td><img src={bebida02}/></td>
                            <td>Brahma 350ml</td>
                            <td>2</td>
                            <td>R$99,99</td>
                            <td>R$99,99</td>
                            <td><button class="btn-tabela" type="submit"> + </button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>      
        </div> 
        <Footer />
    </div>   
  );
}
