import tradicional  from '../assets/Coffees/tradicional.svg'
import americano  from '../assets/Coffees/americano.svg'
import cremoso  from '../assets/Coffees/cremoso.svg'
import gelado  from '../assets/Coffees/gelado.svg'
import cafeLeite  from '../assets/Coffees/cafeLeite.svg'
import latte  from '../assets/Coffees/latte.svg'
import capuccino  from '../assets/Coffees/capuccino.svg'
import macchiato  from '../assets/Coffees/macchiato.svg'
import mocaccino  from '../assets/Coffees/mocaccino.svg'
import chocoQuente  from '../assets/Coffees/chocoQuente.svg'
import cubano  from '../assets/Coffees/cubano.svg'
import havaiano  from '../assets/Coffees/havaiano.svg'
import arabe  from '../assets/Coffees/arabe.svg'
import irlandes  from '../assets/Coffees/irlandes.svg'

export const coffeeData = {
  TRADICIONAL: {
    id: 1,
    image: tradicional,
    tag_pri: 'TRADICIONAL',    
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    amountOrder: 1,
    price: 9.90,
  },

  AMERICANO: {
    id: 2,
    image: americano,
    tag_pri: 'TRADICIONAL',   
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    amountOrder: 1,
    price: 9.90,
  },

  CREMOSO: {
    id: 3,
    image: cremoso,
    tag_pri: 'TRADICIONAL',   
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    amountOrder: 1,
    price: 9.90,
  },

  GELADO: {
    id: 4,
    image: gelado,
    tag_pri: 'TRADICIONAL',   
    tag_sec: 'GELADO',   
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    amountOrder: 1,
    price: 9.90,
  },

  LEITE: {
    id: 5,
    image: cafeLeite,
    tag_pri: 'TRADICIONAL',   
    tag_sec: 'COM LEITE',   
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    amountOrder: 1,
    price: 9.90,
  },

  LATTE: {
    id: 6,
    image: latte,
    tag_pri: 'TRADICIONAL',   
    tag_sec: 'COM LEITE',   
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    amountOrder: 1,
    price: 9.90,
  },

  CAPUCCINO: {
    id: 7,
    image: capuccino,
    tag_pri: 'TRADICIONAL',   
    tag_sec: 'COM LEITE',   
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    amountOrder: 1,
    price: 9.90,
  },

  MACCHIATO: {
    id: 8,
    image: macchiato,
    tag_pri: 'TRADICIONAL',   
    tag_sec: 'COM LEITE',   
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    amountOrder: 1,
    price: 9.90,
  },

  MOCACCINO: {
    id: 9,
    image: mocaccino,
    tag_pri: 'TRADICIONAL',   
    tag_sec: 'COM LEITE',   
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    amountOrder: 1,
    price: 9.90,
  },

  CHOCOQUENTE: {
    id: 10,
    image: chocoQuente,
    tag_pri: 'ESPECIAL',   
    tag_sec: 'COM LEITE',   
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    amountOrder: 1,
    price: 9.90,
  },

  CUBANO: {
    id: 11,
    image: cubano,
    tag_pri: 'ESPECIAL',   
    tag_sec: 'ALCOÓLICO',   
    tag_thi: 'GELADO',   
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    amountOrder: 1,
    price: 9.90,
  },

  HAVAIANO: {
    id: 12,
    image: havaiano,
    tag_pri: 'ESPECIAL', 
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    amountOrder: 1,
    price: 9.90,
  },

  ARABE: {
    id: 13,
    image: arabe,
    tag_pri: 'ESPECIAL', 
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    amountOrder: 1,
    price: 9.90,
  },

  Irlandês: {
    id: 14,
    image: irlandes,
    tag_pri: 'ESPECIAL', 
    tag_sec: 'ALCOÓLICO', 
    title: 'Inlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    amountOrder: 1,
    price: 9.90,
  },
}