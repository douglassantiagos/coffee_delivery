import styled, { css } from "styled-components";
import { BaseContainerOrderAndSelected, BaseInfoFormAndPayment } from "../../styled";

export const PaymentContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      border: 1px solid ${theme.brand["purple"]}; ;
      background: ${theme.brand["purple-light"]};    
    `}

    &:hover {
      filter: brightness(90%);
    }
  }
`

export const ContentLabel = styled.div`
  width: 11.16rem;
  height: 3.18rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  text-transform: uppercase;

  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.base.button};
  border: 1px solid ${(props) => props.theme.base.button};

  font-size: 0.75rem;
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.brand["purple"]};
  }

  :hover {
    background: ${(props) => props.theme.base.hover};  
  }
`

export const Payment = styled(BaseContainerOrderAndSelected)`
  height: 12.93rem;

  section {
    padding: 0.5rem 2.5rem;
  }
`

export const InfoPayment = styled(BaseInfoFormAndPayment)`
  svg {
    color: ${(props) => props.theme.brand["purple"]};
  }
`

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 0 2.5rem;
  margin-top: -1.5rem;  
`