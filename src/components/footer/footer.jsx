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
            <div class="flex-container02 border-bottom-white02">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="icons-nav"><img width="135" src={App }/></div>
                            <p>Peça Pelo APP</p>
                        </div>
                        <div class="col">
                            <div class="icons-nav"><img width="135" src={Entrega }/></div>
                            <p>Fique tranquilo no conforto de sua casa, que nós entregamos</p>
                        </div>
                        <div class="col">
                            <div class="social-midias">
                                    <div class="social-text">
                                        <p>Nossas Redes Sociais</p>
                                     </div>
                                <div class="icons-nav"><a class="" href=""><img width="100" src={Whatsapp }/></a></div>
                                <div class="icons-nav"><a class="" href=""><img width="100" src={Twitter }/></a></div>
                                <div class="icons-nav"><a class="" href=""><img width="100" src={Facebook }/></a></div>
                                <div class="icons-nav"><a class="" href=""><img width="100" src={Instagram }/></a></div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
