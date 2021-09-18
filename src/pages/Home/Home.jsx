import SearchField from "react-search-field";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import Slide1 from '../../assets/images/banner_foto.png';
import vegan from '../../assets/images/vegana.jpg';
import glutem from '../../assets/images/sem-glutem.jpg';
import lactose from '../../assets/images/lactose.jpg';
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
                                <img src={Slide1} class="d-block w-100" alt="Slide 1" />
                            </div>
                            <div class="carousel-item">
                                <img src={Slide1} class="d-block w-100" alt="Slide 2" />
                            </div>
                            <div class="carousel-item">
                                <img src={Slide1} class="d-block w-100" alt="Slide 3" />
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
                <div class="row">
                    <div class="col-md-4">
                    <div class="gallery-box">
                    <img  src={vegan} alt="imagem 1"/>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="gallery-box">
                    <img  src={lactose} alt="imagem 2" />
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="gallery-box">
                    <img  src={glutem} alt="imagem 3" />
                    </div>
                    </div>
                </div>
            </div>
                <Footer />
            </div>
        </div>
    )
}