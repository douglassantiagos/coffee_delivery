import { Minus, Plus } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { Counter } from "./styled";

interface ButtonCounterOrderSelectedProps {
  itemId: number;
  AmountOrder: number;
}

export function ButtonCounterOrderSelected({ itemId, AmountOrder } : ButtonCounterOrderSelectedProps ) {
  const {
    updateAmountOrder
  } = useContext(CoffeeContext);

  function handleIncreaseAmountOrder() {
    updateAmountOrder(itemId, "increase")
  }

  function handleDecreaseAmountOrder() {
    updateAmountOrder(itemId, "decrease")
  }
  
  const disabledButton = AmountOrder === 1; 

  return (
    <Counter>
      <button onClick={handleDecreaseAmountOrder} disabled={disabledButton} >
        <Minus weight="bold" size={16} />
      </button>
      <p>{AmountOrder}</p>
      <button onClick={handleIncreaseAmountOrder}>
        <Plus weight="bold" size={16} />
      </button>
    </Counter>
  )
}