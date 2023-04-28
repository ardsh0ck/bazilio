import { v4 as uuidv4 } from 'uuid'
import pizzaOne from '../assets/images/mocks/pizza-1.jpg'
import pizzaTwo from '../assets/images/mocks/pizza-2.jpg'
import pizzaThree from '../assets/images/mocks/pizza-3.jpg'
import pizzaFour from '../assets/images/mocks/pizza-4.jpg'

const pizza = [
  {
    id: uuidv4(),
    image: pizzaOne,
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
  },
  {
    id: uuidv4(),
    image: pizzaTwo,
    title: 'Гаряча Ципа',
    weight: '490',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '129',
    label: {
      type: 'week',
      text: 'Піца тижня',
    },
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaFour,
    title: 'Базіліо',
    weight: '530',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '152',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaOne,
    title: 'Балувана Галя',
    weight: '515',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '158',
  },
  {
    id: uuidv4(),
    image: pizzaTwo,
    title: 'Гаряча Ципа',
    weight: '490',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '129',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaOne,
    title: 'Балувана Галя',
    weight: '515',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '158',
  },
  {
    id: uuidv4(),
    image: pizzaTwo,
    title: 'Гаряча Ципа',
    weight: '490',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '129',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaFour,
    title: 'Базіліо',
    weight: '530',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '152',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
  {
    id: uuidv4(),
    image: pizzaOne,
    title: 'Балувана Галя',
    weight: '515',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '158',
  },
  {
    id: uuidv4(),
    image: pizzaTwo,
    title: 'Гаряча Ципа',
    weight: '490',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '129',
  },
  {
    id: uuidv4(),
    image: pizzaThree,
    title: 'Баварія',
    weight: '580',
    contents:
      'Вершкова основа, моцарелла, горгондзола, груша, копчена курка, вершкова основа, моцарелла, горгондзола, груша, копчена куркa',
    price: '107',
    oldPrice: '159',
  },
]

export default pizza
