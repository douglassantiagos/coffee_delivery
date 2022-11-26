import styled, { css } from "styled-components";

export const CheckoutContainer = styled.div`
  max-width: 70rem;
  height: calc(101vh - 6.5rem);
  margin: auto;
  margin-top: 2.5rem;

  display: flex;
  align-items: flex-start;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    
    color: ${(props) => props.theme.base.subtitle};
  }
`

export const BaseContainerOrderAndSelected = styled.div`
  width: 40rem;
  border-radius: 6px;
  margin-top: 1rem;
  background: ${(props) => props.theme.base.card};
`

export const BaseInfoFormAndPayment = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 0.5rem;
  
  p:nth-child(1) {
    color: ${(props) => props.theme.base.subtitle};
  }

  p:nth-child(2) {
    font-size: 0.875rem;
  }
`

export const Form = styled(BaseContainerOrderAndSelected)`
  padding-bottom: 2.5rem;  
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Payment = styled(BaseContainerOrderAndSelected)`
  height: 12.93rem;

  section {
    padding: 0.5rem 2.5rem;
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 0 2.5rem;
  margin-top: -1.5rem;  
`

export const ContentSelected = styled(BaseContainerOrderAndSelected)`
  width: 28rem;
  border-radius: 6px 44px;
`

export const TotalPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem 2.5rem;

  button {
    margin-top: 0.75rem;
    height: 46px;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    font-size: 0.875rem;
    font-weight: 700;
    color: ${(props) => props.theme.base.white};  
    background: ${(props) => props.theme.brand.yellow};
    transition: background-color 0.2s ease;

    &:hover {
      background: ${(props) => props.theme.brand["yellow-dark"]};
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.base.white};
    }

    &:disabled:hover {
      background: ${(props) => props.theme.brand["yellow"]};
    }

    &:disabled {
      filter: brightness(90%);
      cursor: not-allowed;
    }
  }
`

const BaseTotalPrice_ItensDeliveryTotal = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Itens = styled(BaseTotalPrice_ItensDeliveryTotal)`
  span:nth-child(1) {
    font-size: 0.875rem;
  }
`

export const Delivery = styled(BaseTotalPrice_ItensDeliveryTotal)`
  span:nth-child(1) {
    font-size: 0.875rem;
  }
`

export const Total = styled(BaseTotalPrice_ItensDeliveryTotal)`
  font-size: 1.25rem; 
  font-weight: 700; 
  color: ${(props) => props.theme.base.subtitle};  
`

















