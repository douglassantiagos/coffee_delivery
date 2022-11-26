import { useContext, useState } from "react";
import { ShoppingCartSimple } from "phosphor-react";

import { Card, Footer, Content, ButtonBuy, ButtonFooter, Price } from "./styled";

import { ButtonCounterOrder } from "../../../../components/ButtonCounterOrder";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { FormatMoney } from "../../../../utils/FormatMoney";

export interface CoffeeDataType {
  id: number;
  image: string;
  tag_pri: string;   
  tag_sec?: string;   
  tag_thi?: string;   
  title: string;
  subtitle: string;
  amountOrder: number;
  price: number;
}

interface CoffeeCardProps {
  data: CoffeeDataType;
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { 
    addNewItemToCart,
  } = useContext(CoffeeContext)

  const [amountOrder, setAmountOrder] = useState(1);

  function handleIncreaseAmountOrder() {
    setAmountOrder((state) => state + 1)
  }

  function handleDecreaseAmountOrder() {
    setAmountOrder((state) => state - 1)
  }

  function handleAddToCart(data: CoffeeDataType, amountOrder: number) {
    addNewItemToCart(data, amountOrder)
  }  

  return (
    <Card>
      <Content>
        <img src={data.image} alt="" />

        <div>
          <span>{data.tag_pri}</span>
          {data.tag_sec && <span>{data.tag_sec}</span>}
          {data.tag_thi && <span>{data.tag_thi}</span>}
        </div>

        <h1>{data.title}</h1>

        <p>{data.subtitle}</p>
      </Content>

      <Footer>
        <Price>
          <p>R$</p>
          <span>{FormatMoney(data.price)}</span>
        </Price>

        <ButtonFooter>
          <ButtonCounterOrder
            handleIncreaseAmountOrder={handleIncreaseAmountOrder}
            handleDecreaseAmountOrder={handleDecreaseAmountOrder}
            amountOrder={amountOrder}
          />

          <ButtonBuy onClick={() => handleAddToCart(data, amountOrder)}>
            <ShoppingCartSimple weight="fill" size={22}/>
          </ButtonBuy>
        </ButtonFooter>
      </Footer>
    </Card>
  )
}
