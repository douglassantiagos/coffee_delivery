import styled from "styled-components";

export const SuccessContainer = styled.div`
  max-width: 70rem;
  height: calc(101vh - 6.5rem);
  margin: auto;
  margin-top: 5rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme.brand["yellow-dark"]}
  }

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base.subtitle}
    font-family: 'Roboto';
    font-weight: 400;
  }

  span {
    font-weight: 700;
  }
`

export const ContentAboutOrder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
`

export const InformationDelivery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 40px;
  position: relative;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.base.background};
  min-width: 32.875rem;

  &::before {
    content: "";
    position: absolute;
    border-radius: 6px 36px;
    inset: -1px;
    z-index: -1;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }
`

const BaseContainer_AddressDeliveryPayment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 8px;
    border-radius: 50%;
    color: ${(props) => props.theme.base.background};
  }

  div {
    display: flex;
    flex-direction: column;
    max-width: 22.125rem;
  }
`

export const Address = styled(BaseContainer_AddressDeliveryPayment)`
  svg {
    background: ${(props) => props.theme.brand.purple};
  }
`

export const Delivery = styled(BaseContainer_AddressDeliveryPayment)`
  svg {
    background: ${(props) => props.theme.brand.yellow};
  }
`

export const Payment = styled(BaseContainer_AddressDeliveryPayment)`
  svg {
    background: ${(props) => props.theme.brand["yellow-dark"]};
  }  
`