import pizza1 from '../../assets/images/Imagem01.png';
import pizza2 from '../../assets/images/Imagem02.png';
import pizza3 from '../../assets/images/Imagem03.png';
import pizza4 from '../../assets/images/Imagem04.png';
import pizza5 from '../../assets/images/Imagem05.png';
import pizza6 from '../../assets/images/Imagem06.png';
import pizza7 from '../../assets/images/Imagem07.png';
import pizza8 from '../../assets/images/Imagem08.png';

import semLactose from '../../assets/icons/icone_sem_lactose.png';
import semGluten from '../../assets/icons/icone_semGluten.png'
import veganaIcon from '../../assets/icons/icone_pizza_vegana.png';

export default [
    {
        id: 1,
        image: pizza1,
        category: 'Salgada',
        title: 'Frango com Catupiry',
        preco: 45,
        imgIcon: veganaIcon
    },

    {
        id: 2,
        image: pizza2,
        category: 'Salgada',
        title: 'Calabresa',
        preco: 40,
        imgIcon: semGluten
    },

    {
        id: 3,
        image: pizza3,
        category: 'Vegana',
        title: 'Pizza Vegana',
        preco: 35,
        imgIcon: semLactose
    },

    {
        id: 4,
        image: pizza4,
        category: 'Doce',
        title: 'Chocolate com Morango',
        preco: 35,
        imgIcon: veganaIcon
    },

    {
        id: 5,
        image: pizza5,
        category: 'Salgada',
        title: 'Carne com Pimentões',
        preco: 45,
        imgIcon: semGluten
    },

    {
        id: 6,
        image: pizza6,
        category: 'Salgada',
        title: 'Saúdavel com Peperoni',
        preco: 55,
        imgIcon: semLactose
    },

    {
        id: 7,
        image: pizza7,
        category: 'Vegana',
        title: 'Beringela com Tomates',
        preco: 40,
        imgIcon: veganaIcon
    },

    {
        id: 8,
        image: pizza8,
        category: 'Salgada',
        title: 'Peperoni',
        preco: 45,
        imgIcon: semLactose
    },
];