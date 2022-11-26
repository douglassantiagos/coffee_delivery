import styled from "styled-components";

import backgroundHome from '../../assets/background.svg'

export const BackgroundBanner = styled.div`
  background-image: url(${backgroundHome});
  background-repeat: repeat;
  background-position: center;
`

export const IntroContainer = styled.div`
  max-width: 70rem;
  height: 34rem;
  margin: auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 36.75rem;
  gap: 4.125rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 3.9rem;
    color: ${(props) => props.theme.base.title}
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme.base.subtitle}    
  }  
`

export const Information = styled.div`
  display: grid;
  grid-template-columns: 17rem 20rem;  

  div:nth-child(3){
    padding-top: 1.25rem;
  }

  div:nth-child(4){
    padding-top: 1.25rem;
  }
`

export const ImageBanner = styled.div`
  width: 29.75rem;
  height: 22.5rem;
`

export const CoffeeList = styled.div`
  max-width: 70rem;
  margin: auto;

  h1 {
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.base.subtitle};
  }
`

export const ListContainer = styled.div`
  margin-top: 2.6rem; 
  margin-bottom: 9.81rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
`