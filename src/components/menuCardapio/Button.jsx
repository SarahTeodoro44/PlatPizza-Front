import './Menu.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import items from '../../pages/Cardapio/allData';

export function Button({ button, filter }) {
    return (
        <div className="button-categoria">
            {
                button.map((cat, i) => {
                    return (
                        <ButtonGroup aria-label="Basic example">
                            <button type="button" className="button-menu" onClick={() => filter(cat)}>{cat}</button>
                            </ButtonGroup>

                    )
                })
            }
        </div>
    )
}