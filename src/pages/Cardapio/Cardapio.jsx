import { Menu } from '../../components/menuCardapio/Menu';
import { Header } from "../../components/header/header";

export function Cardapio() {
    return (
        <div>
            <div className="container">
                <Header />
            </div>
            <Menu />
        </div>

    )
}