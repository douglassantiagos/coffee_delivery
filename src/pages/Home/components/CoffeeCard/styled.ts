import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme.base.card};
  margin-top: 0.5rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -35px;
  }

  div {
    margin-top: 0.75rem;

    span {
      padding: 4px 8px;
      border-radius: 100px;
      background: ${(props) => props.theme.brand["yellow-light"]};
      color: ${(props) => props.theme.brand["yellow-dark"]};
  
      font-size: 0.625rem;
      font-weight: 700;
    }

    span + span {
      margin-left: 0.25rem;
    }
  }


  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'baloo 2';
    margin-top: 1rem;
  }

  p {
    max-width: 13.5rem;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme.base.label};
    margin-top: 0.5rem;
  }  
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.06rem;
  gap: 1.43rem;
`  
export const Price = styled.div`  
  display: flex;
  align-items: center;
  gap: 0.25rem;

  p {
    font-size: 0.875rem;
  }

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;
  }  
`

export const ButtonFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonBuy = styled.button`
  background: ${(props) => props.theme.brand["purple-dark"]};
  color: ${(props) => props.theme.base.card};
  border: 0;
  border-radius: 6px;
  line-height: 0;
  padding: 8px;
  cursor: pointer;

  transition: background-color 0.2s ease;

  :hover {
    background: ${(props) => props.theme.brand["purple"]};
  }
`