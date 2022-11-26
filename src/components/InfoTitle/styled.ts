import styled from "styled-components"

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

export const InfoContainer = styled(BaseInfoFormAndPayment)`
  svg {
    color: ${(props) => props.theme.brand["purple"]};
  }
`