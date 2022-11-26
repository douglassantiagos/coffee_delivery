import styled from "styled-components";

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 4.5rem;
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.base.button};

  button {
    border: 0;
    background: none;
    color: ${(props) => props.theme.brand.purple};
    line-height: 0;
    cursor: pointer;
  }
`