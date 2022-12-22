import { coffee } from "@/assets"


export type CoffeeType = {
  id: string
  name: string
  badgets: string[]
  description: string
  img: string
  price: number
}

export const CoffeeList: CoffeeType[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    badgets: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: coffee.expresso,
    price: 5.0,
  },
  {
    id: '2',
    name: 'Expresso Americano',
    badgets: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: coffee.americano,
    price: 4.0,
  },

  {
    id: '3',
    name: 'Expresso Cremoso',
    badgets: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    img: coffee.expressoCremoso,
    price: 6.0,
  },

  {
    id: '4',
    name: 'Expresso Gelado',
    badgets: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: coffee.cafeGelado,
    price: 7.0,
  },
  {
    id: '5',
    name: 'Café com Leite',
    badgets: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: coffee.cafeComLeite,
    price: 6.0,
  },
  {
    id: '6',
    name: 'Latte',
    badgets: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso, com o dobro de leite e espuma cremosa',
    img: coffee.latte,
    price: 8.0,
  },
  {
    id: '7',
    name: 'Capuccino',
    badgets: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: coffee.cappucino,
    price: 10.0,
  },
  {
    id: '8',
    name: 'Macchiato',
    badgets: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: coffee.macchiato,
    price: 9.0,
  },
  {
    id: '9',
    name: 'Mocaccino',
    badgets: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: coffee.mochaccino,
    price: 9.0,
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    badgets: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: coffee.chocolateQuente,
    price: 10.0,
  },
  {
    id: '11',
    name: 'Cubano',
    badgets: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: coffee.cubano,
    price: 10.0,
  },
  {
    id: '12',
    name: 'Havaiano',
    badgets: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: coffee.havaiano,
    price: 9.0,
  },
  {
    id: '13',
    name: 'Árabe',
    badgets: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: coffee.arabe,
    price: 8.0,
  },
  {
    id: '14',
    name: 'Irlandês',
    badgets: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: coffee.irlandes,
    price: 11.0,
  },
  {
    id: '15',
    name: 'Latte Vegano',
    badgets: ['Especial', 'Vegano'],
    description:
      'Uma dose de café expresso com  leite de soja e espuma cremosa',
    img: coffee.latte,
    price: 11.0,
  },
  {
    id: '16',
    name: 'Americano Gelado',
    badgets: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso americano e cubos de gelo',
    img: coffee.americano,
    price: 4.0,
  },
]

// transforma o array em um objetos de objetos, com o valor id como chave
export const coffees = Object.fromEntries(
  CoffeeList.map((coffee) => {
    return [coffee.id, coffee]
  }),
)

// retorna os valores do objeto em um array, primeira valor é a chave, segundo é o valor do objeto
// export const CoffeeList: CoffeeType[] = Object.entries(coffees).map(
//   ([id, coffee]) => {
//     return {
//       ...coffee,
//       id,
//     }
//   },
// )
