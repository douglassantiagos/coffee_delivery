import { Minus, Plus } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { Counter } from "./styled";

interface ButtonCounterOrderProps {
  handleIncreaseAmountOrder: () => void
  handleDecreaseAmountOrder: () => void
  amountOrder: number
}

export function ButtonCounterOrder({ 
  handleIncreaseAmountOrder, 
  handleDecreaseAmountOrder,
  amountOrder
}: ButtonCounterOrderProps) {  
  
  const disabledButton = amountOrder === 1;  

  return (
    <Counter>
      <button onClick={handleDecreaseAmountOrder} disabled={disabledButton} >
        <Minus weight="bold" size={16} />
      </button>
      <p>{amountOrder}</p>
      <button onClick={handleIncreaseAmountOrder}>
        <Plus weight="bold" size={16} />
      </button>
    </Counter>
  )
}