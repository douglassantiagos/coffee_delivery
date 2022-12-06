import produce from "immer";
import { createContext, ReactNode, useEffect, useState } from "react";

import { CoffeeDataType } from "../pages/Home/components/CoffeeCard";

interface AddContextType {
  coffeeSelected: CoffeeDataType[]
  cartItemsTotal: number
  cepFilled: string
  locationCity: string
  addNewItemToCart: (data: CoffeeDataType, amountOrder: number) => void
  removeCartItem: (itemId: number) => void
  updateAmountOrder: (itemId: number, type: "increase" | "decrease") => void
  cleanCart: () => void
  handleValidCep: (event: any) => void
  getCoordintes: () => void
}

export const CoffeeContext = createContext({} as AddContextType);

interface CoffeeDataContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider( { children }: CoffeeDataContextProviderProps ) {
  const [ locationCity, setLocationCity ] = useState('');
  const [ cepFilled, setCepFilled ] = useState('') 
  const [ coffeeSelected, setCoffeeSelected ] = useState<CoffeeDataType[]>(() => {
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

  function handleValidCep(event: any) {
    setCepFilled(event.target.value)
  }

  function cleanCart() {
    setCoffeeSelected([])
    setCepFilled('')
  }

  function getCoordintes() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(position: any) {
      var lat = position.coords.latitude.toString();
      var lng = position.coords.longitude.toString();
      var coordinates = [lat, lng];
      getCity(coordinates);
      return;
    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      setLocationCity("Localização Bloqueada")    
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function getCity(coordinates: any) {
    var xhr = new XMLHttpRequest();
    var lat = coordinates[0];
    var lng = coordinates[1];

    // Paste your LocationIQ token below.
    xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.294f09055a90de12055bd6c1f274276e&lat=" +
    lat + "&lon=" + lng + "&format=json", true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        var city = response.address.city;
        // console.log("Location: ", response)
        setLocationCity(city)
        return;
      }
    }
  }

  useEffect(() => {
    const storageCartItem = JSON.stringify(coffeeSelected)
    localStorage.setItem("@coffeeDelivery:cart-item-1.0.0", storageCartItem)
  }, [coffeeSelected])

  useEffect(() => { 
    getCoordintes()   
  }, [])

  return (
    <CoffeeContext.Provider value={{
      coffeeSelected,
      cartItemsTotal,
      addNewItemToCart,
      removeCartItem,
      updateAmountOrder,
      cleanCart,
      handleValidCep,
      cepFilled,
      locationCity,
      getCoordintes,
    }}>
      { children }
    </CoffeeContext.Provider>
  )
}