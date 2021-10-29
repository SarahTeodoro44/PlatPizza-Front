import './footer.css';
import App from '../../assets/icons/icone_app.png';
import Entrega from '../../assets/icons/icone_entrega.png';
import Whatsapp from '../../assets/icons/icone_whatsapp.png';
import Twitter from '../../assets/icons/icone_twitter.png';
import Facebook from '../../assets/icons/icone_facebook.png';
import Instagram from '../../assets/icons/icone_instagram.png'

export function Footer() {
    return (
        <footer> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <div className="flex-container02 border-bottom-white02">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="icons-nav"><img width="100" src={App} /></div>
                            <p>Peça Pelo APP</p>
                        </div>
                        <div className="col">
                            <div className="icons-nav"><img width="70" src={Entrega} /></div>
                            <p>Fique tranquilo no conforto de sua casa, que nós entregamos</p>
                        </div>
                        <div className="col">
                            <div className="social-midias">
                                <div className="social-text">
                                    <p>Nossas Redes Sociais</p>
                                </div>
                                <div className="icons-nav"><a className="" target="_blank" href="https://api.whatsapp.com/send?1=pt_br&phone=5519999999999"><img width="50" src={Whatsapp} /></a></div>
                                <div className="icons-nav"><a className="" target="_blank" href="https://twitter.com"><img width="50" src={Twitter} /></a></div>
                                <div className="icons-nav"><a className="" target="_blank" href="https://facebook.com"><img width="50" src={Facebook} /></a></div>
                                <div className="icons-nav"><a className="" target="_blank" href="https://instagram.com"><img width="50" src={Instagram} /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
