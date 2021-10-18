import './Menu.css';

export function Button({ button, filter }) {
    return (
        <div>
            <div className="button-categoria">
                {
                    button.map((cat, i) => {
                        return (
                            <button type="button" onclick={() => filter(cat)}>{cat}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}