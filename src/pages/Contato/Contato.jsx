import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"

import relogioIcon from "../../assets/icons/RelogioIcon.png"
import locaIcon from "../../assets/icons/LocalizacaoIcon.png"

import './Contato.css'

export  function Contato(){
    return(
        <div className="container">
            <Header />
                <div className="info">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column">
                                <div className="mx-lg-auto">
                                    <div className="d-flex d-flex-style-1">
                                        <img src={relogioIcon} alt="Relógio" className="imgIconInfo"/>
                                        <span>Funcionamento</span>                       
                                    </div>
                                    <p>
                                        Domingo a Quinta das 18h às 23h20 <br />
                                        Sexta e Sábado das 18h às 23h40
                                    </p>
                                </div>            
                            </div>                     
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column">
                                <div className="mx-lg-auto">
                                    <div className="d-flex d-flex-style-1">
                                        <img src={locaIcon} alt="Localização" className="imgIconInfo"/>
                                        <span>Nossa Localização</span>
                                    </div> 
                                    <p>
                                        Rua das laranjeiras, 353 <br />
                                        Centro - Araras/SP
                                    </p>     
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>

                <div className="googleMaps">
                    <div className="row">
                        <div className="col">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.0731842487385!2d-47.38355009321429!3d-22.38859834833483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c879e40b9729d5%3A0xfb49f8df810b81b6!2sR.%20das%20Laranjeiras%2C%20353%20-%20Jardim%20Maria%20Rosa%2C%20Araras%20-%20SP%2C%2013609-052!5e0!3m2!1spt-BR!2sbr!4v1632499334778!5m2!1spt-BR!2sbr" width="100%" height="450"></iframe>
                        </div>
                    </div>
                </div>

                <div className="forms-duvida">
                    <form id="form1" action=""> 
                        <h1>Eae, ficou alguma duvida? nos conte aqui.</h1>
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="d-flex flex-column">
                                    <input type="text" placeholder="Nome Completo" className="mb-12"></input>
                                    <input type="email" required placeholder="E-mail"></input>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="d-flex flex-column ">
                                        <input type="text" placeholder="DDD + Celular" className="mb-12"></input>
                                        <input type="text" placeholder="Motivo de Contato"></input>
                                </div>  
                            </div>
                            <div className="col-lg-4 col-12">
                                ​<textarea className="txtArea" placeholder="Mensagem"></textarea>
                            </div>                      
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" form="form1" value="Submit">Enviar</button> 
                        </div>
                          
                    </form>
                </div>
            <Footer />
        </div>
        
    )
}