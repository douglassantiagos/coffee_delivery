import styled from "styled-components";
import { BaseInfoFormAndPayment } from "../../styled";

export const FormInputContainer = styled.form`  
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  padding: 0 2.5rem;
  margin-top: -0.5rem;    
  
  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .rua {
    grid-column: span 3;
  }

  .complemento {
    grid-column: span 2;
  }    
`

export const InfoForm = styled(BaseInfoFormAndPayment)`
  svg {
    color: ${(props) => props.theme.brand["yellow-dark"]};
  }
`