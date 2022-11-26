import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.base.background};

  > div {
    margin: auto;
    width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    display: flex;

    &:focus {
      box-shadow: none;
    }
  }
`

export const HeaderContainerShadow = styled.div`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.base.background};

  > div {
    margin: auto;
    width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    display: flex;

    &:focus {
      box-shadow: none;
    }
  }

  box-shadow: 0 0 10px 0;
`

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  button {
    display: flex;
    align-items: center;    
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    gap: 0.25rem;
    font-size: 0.875rem;
    
    background: ${(props) => props.theme.brand["purple-light"]};
    color: ${(props) => props.theme.brand["purple"]}; 
    
    transition: background-color 0.2s ease;
    
    :hover {
      background: ${(props) => props.theme.brand.purple};
      color: ${(props) => props.theme.base.background};  
    }
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    border: 0;
    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme.brand["yellow-light"]};
    color: ${(props) => props.theme.brand["yellow-dark"]};  

    transition: background-color 0.2s ease;

    :hover {
      background: ${(props) => props.theme.brand.yellow};
      color: ${(props) => props.theme.base.background};  
    }

    div {
      position: absolute;
      top: -0.56rem;
      right: -0.625rem;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
      height: 1.25rem;

      background: ${(props) => props.theme.brand["yellow-dark"]};
      border-radius: 100%;
      
      span {
        color: ${(props) => props.theme.base.white};
        font-size: 0.75rem;
        font-weight: 700;
        margin-top: 0.1rem;
      }
    }
  }
`

