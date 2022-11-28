import americano from '../../assets/imgs/coffee/americano.png'
import arabe from '../../assets/imgs/coffee/arabe.png'
import cafeComLeite from '../../assets/imgs/coffee/cafe_com_leite.png'
import cafeGelado from '../../assets/imgs/coffee/cafe_gelado.png'
import cappucino from '../../assets/imgs/coffee/cappucino.png'
import chocolateQuente from '../../assets/imgs/coffee/chocolate_quente.png'
import cubano from '../../assets/imgs/coffee/cubano.png'
import expressoCremoso from '../../assets/imgs/coffee/expresso_cremoso.png'
import expresso from '../../assets/imgs/coffee/expresso.png'
import havaiano from '../../assets/imgs/coffee/havaiano.png'
import irlandes from '../../assets/imgs/coffee/irlandes.png'
import latte from '../../assets/imgs/coffee/latte.png'
import macchiato from '../../assets/imgs/coffee/macchiato.png'
import mochaccino from '../../assets/imgs/coffee/mochaccino.png'

export type CoffeCardProps = {
  name: string
  badgets: string[]
  description: string
  img: HTMLImageElement
  price: number
}

export const coffees = [
  {
    name: 'Expresso Tradicional',
    badgets: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: expresso,
    price: '5,00',
  },
  {
    name: 'Expresso Americano',
    badgets: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: americano,
    price: '4,00',
  },
  {
    name: 'Expresso Cremoso',
    badgets: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    img: expressoCremoso,
    price: '6,00',
  },
  {
    name: 'Expresso Gelado',
    badgets: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: cafeGelado,
    price: '7,00',
  },
  {
    name: 'Café com Leite',
    badgets: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: cafeComLeite,
    price: '6,00',
  },
  {
    name: 'Latte',
    badgets: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso, com o dobro de leite e espuma cremosa',
    img: latte,
    price: '8,00',
  },
  {
    name: 'Capuccino',
    badgets: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: cappucino,
    price: '10,00',
  },
  {
    name: 'Macchiato',
    badgets: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: macchiato,
    price: '9,00',
  },
  {
    name: 'Mocaccino',
    badgets: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: mochaccino,
    price: '9,00',
  },
  {
    name: 'Chocolate Quente',
    badgets: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: chocolateQuente,
    price: '10,00',
  },
  {
    name: 'Cubano',
    badgets: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: cubano,
    price: '10,00',
  },
  {
    name: 'Havaiano',
    badgets: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: havaiano,
    price: '9,00',
  },
  {
    name: 'Árabe',
    badgets: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: arabe,
    price: '8,00',
  },
  {
    name: 'Irlandês',
    badgets: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: irlandes,
    price: '11,00',
  },
  {
    name: 'Latte Vegano',
    badgets: ['Especial', 'Vegano'],
    description:
      'Uma dose de café expresso com  leite de soja e espuma cremosa',
    img: latte,
    price: '11,00',
  },
  {
    name: 'Americano Gelado',
    badgets: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso americano e cubos de gelo',
    img: americano,
    price: '4,00',
  },
]
