import styled from "styled-components"

export const CoffeCartCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2.5rem 0 2.5rem;
`

export const CoffeeCard = styled.div`
  display: flex;

  img {
    width: 4rem;
    height: 4rem;

    margin-right: 1.25rem;
  }

  section {
    margin-right: 3.125rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme.base.subtitle};  
    }

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0 0.5rem;
  border: 0;
  border-radius: 6px;
  background: ${(props) => props.theme.base.button};
  cursor: pointer;

  transition: background-color 0.2s ease;

  svg {
    color: ${(props) => props.theme.brand.purple};  
  }

  :hover {
    background: ${(props) => props.theme.base.hover};
  }  
`

export const Price = styled.span`
  font-weight: 700;
`

export const Dividingline = styled.span`
  display: flex;
  width: 368px;
  border: 1px solid ${(props) => props.theme.base.button};
  margin: 2rem 0 0 0;
`