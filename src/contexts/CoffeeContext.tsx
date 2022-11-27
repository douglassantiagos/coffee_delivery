import produce from "immer";
import { ChangeEvent, createContext, InputHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { CoffeeDataType } from "../pages/Home/components/CoffeeCard";

interface AddContextType {
  coffeeSelected: CoffeeDataType[]
  cartItemsTotal: number
  addNewItemToCart: (data: CoffeeDataType, amountOrder: number) => void
  removeCartItem: (itemId: number) => void
  updateAmountOrder: (itemId: number, type: "increase" | "decrease") => void
  cleanCart: () => void
  handleValidCep: (event: ChangeEvent<HTMLInputElement>) => void
  cepFilled: string
}

export const CoffeeContext = createContext({} as AddContextType);

interface CoffeeDataContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider( { children }: CoffeeDataContextProviderProps ) {
  const [cepFilled, setCepFilled] = useState('') 
  const [coffeeSelected, setCoffeeSelected] = useState<CoffeeDataType[]>(() => {
    const storageCartItem = localStorage.getItem("@coffeeDelivery:cart-item-1.0.0")    
    
    if (storageCartItem) {
      return JSON.parse(storageCartItem)
    }

    return[]
  });


  const cartItemsTotal = coffeeSelected.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.amountOrder
  }, 0)

  function addNewItemToCart(data: CoffeeDataType, amountOrder: number) {
    const cartItemExist = coffeeSelected.findIndex(
      (item) => item.id === data.id
    )

    const newCart = produce(coffeeSelected, (draft) => {
      if (cartItemExist < 0) { // Se o item não existe no carrinho adiciona um novo
        const newCoffeeSelected = {
          ...coffeeSelected,          
          id: data.id,
          image: data.image,
          title: data.title,
          subtitle: data.subtitle,
          tag_pri: data.tag_pri,
          tag_sec: data.tag_sec,
          tag_thi: data.tag_thi,
          amountOrder: amountOrder,
          price: data.price,     
        }    
        draft.push(newCoffeeSelected)
      } else {
        draft[cartItemExist].amountOrder += amountOrder
      }
    })
    setCoffeeSelected(newCart)
  }
  
  function updateAmountOrder(itemId: number, type: "increase" | "decrease") {
    const newCart = produce(coffeeSelected, (draft) => {
      const cartItemExist = coffeeSelected.findIndex(
        (item) => item.id === itemId
      )
        
      if (cartItemExist >= 0) {
        const item = draft[cartItemExist];
        draft[cartItemExist].amountOrder = type === "increase" 
        ? item.amountOrder + 1 
        : item.amountOrder - 1;        
      }
    })    
    setCoffeeSelected(newCart)  
  }

  function removeCartItem(itemId: number) {
    const cartItemsWithoutDeleteOne = coffeeSelected.filter(item => {
      return item.id !== itemId;
    })
    setCoffeeSelected(cartItemsWithoutDeleteOne)
  }

  function handleValidCep(event: ChangeEvent<HTMLInputElement>) {
    setCepFilled(event.target.value)
  }

  function cleanCart() {
    setCoffeeSelected([])
  }

  useEffect(() => {
    const storageCartItem = JSON.stringify(coffeeSelected)

    localStorage.setItem("@coffeeDelivery:cart-item-1.0.0", storageCartItem)
  }, [coffeeSelected])

  return (
    <CoffeeContext.Provider value={{
      coffeeSelected,
      cartItemsTotal,
      addNewItemToCart,
      removeCartItem,
      updateAmountOrder,
      cleanCart,
      handleValidCep,
      cepFilled
    }}>
      { children }
    </CoffeeContext.Provider>
  )
}