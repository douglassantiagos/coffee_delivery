import { Trash } from "phosphor-react";
import { useContext } from "react";
import { ButtonCounterOrderSelected } from "../../../../components/ButtonCounterOrderSelected";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { FormatMoney } from "../../../../utils/FormatMoney";
import { CoffeeDataType } from "../../../Home/components/CoffeeCard";
import { CoffeCartCardContainer, CoffeeCard, Dividingline, Price, RemoveButton } from "./styled";

interface CoffeeCartCardprops {
  data: CoffeeDataType
}

export function CoffeeCartCard({ data }: CoffeeCartCardprops) {
  const { removeCartItem } = useContext(CoffeeContext)

  return (
    <CoffeCartCardContainer key={data.id}>
      <CoffeeCard>
        <img src={data.image} alt="" />

        <section>
          <span>{data.title}</span>
          <div>
            <ButtonCounterOrderSelected 
              itemId={data.id} 
              AmountOrder={data.amountOrder} 
            />

            <RemoveButton type="button" onClick={() => removeCartItem(data.id)}>
              <Trash weight="bold" size={16} />
              REMOVER
            </RemoveButton>
          </div>
        </section>

        <Price>R$ {FormatMoney(data.price)}</Price>
      </CoffeeCard>

      <Dividingline></Dividingline>
    </CoffeCartCardContainer>
  )
}