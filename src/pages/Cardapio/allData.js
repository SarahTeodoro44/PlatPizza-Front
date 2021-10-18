import pizza1 from '../../assets/images/Imagem01.png';
import pizza2 from '../../assets/images/Imagem02.png';
import pizza3 from '../../assets/images/Imagem03.png';
import pizza4 from '../../assets/images/Imagem04.png';
import pizza5 from '../../assets/images/Imagem05.png';
import pizza6 from '../../assets/images/Imagem06.png';
import pizza7 from '../../assets/images/Imagem07.png';
import pizza8 from '../../assets/images/Imagem08.png';

import semLactose from '../../assets/icons/lactose.png';
import semGluten from '../../assets/icons/semGluten.png'
import veganaIcon from '../../assets/icons/vegana.png';

export default [
    {
        id: 1,
        image: pizza1,
        category: 'Salgado',
        title: 'Frango com Catupiry',
        imgIcon: veganaIcon
    },

    {
        id: 2,
        image: pizza2,
        category: 'Salgado',
        title: 'Calabresa',
        imgIcon: semGluten
    },

    {
        id: 3,
        image: pizza3,
        category: 'Vegana',
        title: 'Pizza Vegana',
        imgIcon: semLactose
    },

    {
        id: 4,
        image: pizza4,
        category: 'Doce',
        title: 'Chocolate com Morango',
        imgIcon: veganaIcon
    },

    {
        id: 5,
        image: pizza5,
        category: 'Salgado',
        title: 'Carne com Pimentões',
        imgIcon: semGluten
    },

    {
        id: 6,
        image: pizza6,
        category: 'Salgado',
        title: 'Saúdavel com Peperoni',
        imgIcon: semLactose
    },

    {
        id: 7,
        image: pizza7,
        category: 'Vegana',
        title: 'Beringela com Tomates',
        imgIcon: veganaIcon
    },

    {
        id: 8,
        image: pizza8,
        category: 'Salgado',
        title: 'Peperoni',
        imgIcon: semLactose
    },
];