import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import SearchPage  from '../../components/SearchPage';
import Banner from '../../assets/images/banner.jpeg';
import Vegan from '../../assets/images/vegana.jpg';
import Gluten from '../../assets/images/sem-glutem.jpg';
import Lactose from '../../assets/images/lactose.jpg';
import VeganIcon from '../../assets/icons/vegana.png';
import LactoseIcon from '../../assets/icons/lactose.png';
import GlutenIcon from '../../assets/icons/semGluten.png';
import Pesquisa from '../../assets/icons/pesquisa.png';
import './Home.css';

export function Home() {
    return (
        <div>
            <div className="container">
                <Header />
                <section id="slide">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Banner} class="d-block w-100" alt="Slide 1" />
                            </div>
                            <div class="carousel-item">
                                <img src={Banner} class="d-block w-100" alt="Slide 2" />
                            </div>
                            <div class="carousel-item">
                                <img src={Banner} class="d-block w-100" alt="Slide 3" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                <div class="container"> <br></br> <br></br> <br></br> 
                    <div>
                        < SearchPage  />
                        <a class="" href=""><img class="search" src={Pesquisa} alt="icone pizza vegana"/></a>
                    </div>
                    <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br> <br></br>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="gallery-box">
                                <img class="iconspage" src={VeganIcon} alt="icone pizza vegana"/> 
                                <img  src={Vegan} alt="pizza vegana"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gallery-box">
                                <img class="iconspage" src={LactoseIcon} alt="icone pizza sem lactose"/> 
                                <img  src={Lactose} alt="pizza sem lactose" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="gallery-box">
                                <img class="iconspage" src={GlutenIcon} alt="icone piza sem gluten"/> 
                                <img  src={Gluten} alt="pizza sem glutem" />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}