import { useLocation, useNavigate } from "react-router-dom";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import { Address, ContentAboutOrder, Delivery, InformationDelivery, Payment, SuccessContainer } from "./styled";

import IllustrationDelivery from '../../assets/Illustration.svg'
import { FormDataProps, paymentMethods } from "../Checkout";
import { useEffect } from "react";

interface LocationType {
  state: FormDataProps
}

export default function Success() {
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  const {
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    uf,
    paymentMethod
  } = state

  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <h1>Agora é só aguardar que logo o café chegará até você</h1>
      </div>

      <ContentAboutOrder>
        <InformationDelivery>
          <Address>
            <MapPin weight="fill" size={32} />
            <div>
              <p>Entrega em <span>{rua}, {numero}</span> {complemento} {bairro} - {cidade}, {uf}</p>
            </div>
          </Address>

          <Delivery>
            <Timer weight="fill" size={32} />
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </Delivery>

          <Payment>
            <CurrencyDollar weight="fill" size={32} />
            <div>
              <p>Pagamento na entrega</p>
              <span>{paymentMethods[paymentMethod].label}</span>
            </div>
          </Payment>
        </InformationDelivery>

        <img src={IllustrationDelivery} alt="" />
      </ContentAboutOrder>
    </SuccessContainer>
  )
}
