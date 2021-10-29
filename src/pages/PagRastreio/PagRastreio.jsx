import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"
import React, { useState } from "react";
import "./PagRastreio.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import Table from 'react-bootstrap/Table'
import bebida01 from '../../assets/images/bebida01.png';
import bebida02 from '../../assets/images/bebida02.png';
import LigarEstabelicimento from '../../assets/icons/icone_telefone_preenchido_Branco.png'; 

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
            <button class="btn-call"type="submit"><img src={LigarEstabelicimento} width="15" class="d-block w-100 icon_ligar" alt="LigarEstabelicimento" /> Ligar para Estabelecimento </button>  
        </div>    
        <div class="iframe01">
        <p class="p-rastreio">Rastreio:</p>
        </div>
        <div class="iframe02">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.0731842487385!2d-47.38355009321429!3d-22.38859834833483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c879e40b9729d5%3A0xfb49f8df810b81b6!2sR.%20das%20Laranjeiras%2C%20353%20-%20Jardim%20Maria%20Rosa%2C%20Araras%20-%20SP%2C%2013609-052!5e0!3m2!1spt-BR!2sbr!4v1632499334778!5m2!1spt-BR!2sbr" width="591" height="191" frameborder="0"></iframe>
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
                        </tr>
                        <tr>
                            <td><img src={bebida02}/></td>
                            <td>Brahma 350ml</td>
                            <td>2</td>
                            <td>R$99,99</td>
                            <td>R$99,99</td>
                        </tr>
                    </tbody>
                </Table>
            </div>      
        </div> 
        <Footer />
    </div>   
  );
}
