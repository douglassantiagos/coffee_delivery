import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

interface InputContentProps {
  hasError: boolean;
}


export const InputContent = styled.div<InputContentProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.base.button};
  background: ${props => props.theme.base.input};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${props => props.theme.brand["yellow-dark"]};
  }
  
  ${({ theme, hasError }) =>
  hasError &&
  css`
    border-color: ${theme.base.warning};
  `}
`

export const InputStyle = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme.base.subtitle};
  
  &:focus {
    outline: 0;
    box-shadow: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.base.label};
  }
`

export const WarningText = styled.p`
  color: ${(props) => props.theme.base.warning};
  font-size: 0.75rem;
  line-height: 130%;
  font-weight: 400;
`;

export const OpcionalText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.base.label};
`;