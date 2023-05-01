import { v4 as uuidv4 } from 'uuid'
import pizzaOne from '../assets/images/mocks/pizza-1.jpg'
import pizzaTwo from '../assets/images/mocks/pizza-2.jpg'
import pizzaThree from '../assets/images/mocks/pizza-3.jpg'
import pizzaFour from '../assets/images/mocks/pizza-4.jpg'
import pizzaBig from '../assets/images/mocks/pizza-big.png'

const pizza = {
  category: {
    URL: 'pizza',
    title: 'Піца',
  },
  products: [
    {
      id: uuidv4(),
      image: {
        small: pizzaOne,
        big: pizzaBig,
      },
      title: 'Балувана Галя',
      weight: '515',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '158',
      hot: true,
      label: {
        type: 'new',
        text: 'Нова',
      },
      slug: 'baluvana-galya',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaTwo,
        big: pizzaBig,
      },
      title: 'Гаряча Ципа',
      weight: '490',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '129',
      label: {
        type: 'week',
        text: 'Піца тижня',
      },
      slug: 'garyahca-tsipa',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaThree,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaFour,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaOne,
        big: pizzaBig,
      },
      title: 'Базіліо',
      weight: '530',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '152',
      slug: 'bazilio',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaTwo,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaThree,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaFour,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaOne,
        big: pizzaBig,
      },
      title: 'Балувана Галя',
      weight: '515',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '158',
      slug: 'baluvana-galya',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaTwo,
        big: pizzaBig,
      },
      title: 'Гаряча Ципа',
      weight: '490',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '129',
      slug: 'garyacha-tsipa',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaThree,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaFour,
        big: pizzaBig,
      },
      title: 'Балувана Галя',
      weight: '515',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '158',
      slug: 'baluvana-galya',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaOne,
        big: pizzaBig,
      },
      title: 'Гаряча Ципа',
      weight: '490',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '129',
      slug: 'garyacha-tsipa',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaTwo,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaThree,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaFour,
        big: pizzaBig,
      },
      title: 'Базіліо',
      weight: '530',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '152',
      slug: 'bazilio',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaOne,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaTwo,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaThree,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaFour,
        big: pizzaBig,
      },
      title: 'Балувана Галя',
      weight: '515',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '158',
      slug: 'baluvana-galya',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaOne,
        big: pizzaBig,
      },
      title: 'Гаряча Ципа',
      weight: '490',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '129',
      slug: 'garyacha-tsipa',
    },
    {
      id: uuidv4(),
      image: {
        small: pizzaTwo,
        big: pizzaBig,
      },
      title: 'Баварія',
      weight: '580',
      contents:
        'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
      price: '107',
      oldPrice: '159',
      slug: 'bavaria',
    },
  ],
}

export default pizza
