import './footer.css';
import App from '../../assets/icons/app.png';
import Entrega from '../../assets/icons/entrega.png';
import Whatsapp from '../../assets/icons/whatsapp.png';
import Twitter from '../../assets/icons/twitter.png';
import Facebook from '../../assets/icons/facebook-icon.png';
import Instagram from '../../assets/icons/instagram.png'

export function Footer() {
    return (
        <footer> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
            <div className="flex-container02 border-bottom-white02">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="icons-nav"><img width="135" src={App} /></div>
                            <p>Peça Pelo APP</p>
                        </div>
                        <div className="col">
                            <div className="icons-nav"><img width="135" src={Entrega} /></div>
                            <p>Fique tranquilo no conforto de sua casa, que nós entregamos</p>
                        </div>
                        <div className="col">
                            <div className="social-midias">
                                <div className="social-text">
                                    <p>Nossas Redes Sociais</p>
                                </div>
                                <div className="icons-nav"><a className="" href=""><img width="100" src={Whatsapp} /></a></div>
                                <div className="icons-nav"><a className="" href=""><img width="100" src={Twitter} /></a></div>
                                <div className="icons-nav"><a className="" href=""><img width="100" src={Facebook} /></a></div>
                                <div className="icons-nav"><a className="" href=""><img width="100" src={Instagram} /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
