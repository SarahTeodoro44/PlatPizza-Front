
import items from '../../pages/Cardapio/allData';
import VeganIcon from '../../assets/icons/vegana.png';
import { useState } from 'react';
import './Menu.css';
import { Button } from './Button';



export function Menu() {

    const allCategories = ['All', ...new Set(items.map(item => item.category))];

    const [menuItem, setMenuItem] = useState(items)
    const [buttons, setButtons] = useState(allCategories)

    console.log(buttons)

    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filterdData = items.filter(item => item.category === button);
        setMenuItem(filterdData)
    }


    return (
        <div className="container">

            <Button button={buttons} filter={filter} />

            <br></br> <br></br> <br></br>
            <div className="item">
                <div className="row">
                    {
                        menuItem.map((item) => {
                            return (
                                <div className="col-md-4">
                                    <div className="item-con" key={item.id}>
                                        <div className="item-container">
                                            <div className="img-wrap">
                                                <img src={item.image} className="img" alt="" />
                                                <div className="pizza-info">
                                                    <h2>{item.title}</h2>
                                                </div>
                                            </div>


                                        </div>
                                        {/* <img src={item.imgIcon} alt="" className="imgIcon" /> */}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}