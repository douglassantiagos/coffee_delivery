import { useContext, useState } from "react";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';

import { CheckoutContainer, ContentSelected, Delivery, Form, Itens, Payment, PaymentMethods, Total, TotalPriceContainer } from "./styled";
import { WarningText } from "../../components/Input/styled";

import { CoffeeContext } from "../../contexts/CoffeeContext";
import { FormatMoney } from "../../utils/FormatMoney";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { PaymentMethodInput } from "./components/PaymentMethodsInput";
import { useNavigate } from "react-router-dom";
import { FormInput } from "./components/FormInput";
import { InfoTitle } from "../../components/InfoTitle";

export interface FormDataProps {
  cep: number
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: {
    credit: string
    debit: string
    money: string
  }
}

enum PaymentMethodsData {  
  credit = "credit",
  debit = "debit",
  money = "money"
}

const deliveryFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP").max(8, "CEP inválido"),
  rua: zod.string().min(1, "Informe a Rua"),
  numero: zod.string().min(1, "Informe o Número para Contato").max(11, "Número Inválido"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Informe o Bairro"),
  cidade: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),  
  paymentMethod: zod.nativeEnum(PaymentMethodsData, { // nativeEnum valida alguns campos. nesse caso, uma lista de objetos (PaymentMethods)
    errorMap: () => {
      return { message: "Escolha uma Forma de Pagamento"}
    }
  }),
})

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />
  },

  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />
  },

  money: {
    label: "Dinheiro",
    icon: <Money size={16} />
  }
}

export default function Checkout() {
  const [cepFilled, setCepFilled] = useState("")
  const navigate = useNavigate()
  
  const { 
    coffeeSelected, 
    cartItemsTotal,
    cleanCart
  } = useContext(CoffeeContext)
  
  const deliveryForm = useForm<FormDataProps>({
    resolver: zodResolver(deliveryFormValidationSchema)
  })

  const { register, handleSubmit, formState: { errors } } = deliveryForm
  
  function handleConfirmOrder(formData: FormDataProps) {
    navigate("/success", {
      state: formData     
    })
    cleanCart()
  }
  
  const enableCepFilledValid = cepFilled.length > 6 && cepFilled.length < 9;
  const disabledButtonConfirmOrder = coffeeSelected.length === 0;
  
  const DELIVERY_PRICE = enableCepFilledValid ? 3.5 : 0;
  const CartTotalPrice = cartItemsTotal + DELIVERY_PRICE;
  
  const paymentMethodsError = errors.paymentMethod?.message as unknown as string;    

  return (
    <CheckoutContainer>
      <div>
        <h1>Complete seu pedido</h1>
        <Form>
          <InfoTitle 
            icon={<MapPinLine size={22} color="#C47F17" />}
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
          />
          <FormProvider {...deliveryForm}>
            <FormInput setCepFilled={setCepFilled} />
          </FormProvider>
        </Form>

        <Payment>
          <InfoTitle 
            icon={<CurrencyDollar size={22} />}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <PaymentMethods>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
              <PaymentMethodInput 
                key={label}
                id={key}
                icon={icon}
                label={label}
                value={key}
                {...register("paymentMethod")}
              />
            ))}
          </PaymentMethods>
          <section>
            {paymentMethodsError && <WarningText>{paymentMethodsError}</WarningText>}                   
          </section>   
        </Payment>
      </div>

      <div>
        <h1>Cafés selecionados</h1>

        <ContentSelected>
          <>
            {coffeeSelected.map(data => {
              return (
                <CoffeeCartCard 
                  key={data.id} 
                  data={data} 
                />
              )
            })}
          </>

          <TotalPriceContainer>
            <Itens>
              <span>Total de itens</span>
              <span>R$ {FormatMoney(cartItemsTotal)}</span>
            </Itens>

            {enableCepFilledValid && (
              <Delivery>
                <span>Entrega</span>
                <span>R$ {FormatMoney(DELIVERY_PRICE)}</span>
              </Delivery>
            )}

            <Total>
              <span>Total</span>
              <span>R$ {FormatMoney(CartTotalPrice)}</span>
            </Total>

            <button onClick={handleSubmit(handleConfirmOrder)} disabled={disabledButtonConfirmOrder}>             
              CONFIRMAR PEDIDO
            </button>
          </TotalPriceContainer>
        </ContentSelected>
      </div>
    </CheckoutContainer>
  )
}
