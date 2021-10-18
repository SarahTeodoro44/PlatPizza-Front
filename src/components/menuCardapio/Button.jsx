import './Menu.css';

import items from '../../pages/Cardapio/allData';

export function Button({ button, filter }) {
    return (
        <div className="button-categoria">
            {
                button.map((cat, i) => {
                    return (
                        <div>
                            <button type="button" onClick={() => filter(cat)}>{cat}</button>
                        </div>

                    )
                })
            }
        </div>
    )
}