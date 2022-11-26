import styled from "styled-components";

interface InforContainerProps {
  iconBg: string
}

export const InfoContainer = styled.div<InforContainerProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  svg {
    background-color: ${({ iconBg }) => iconBg};
    color: ${(props) => props.theme.base.background};
    padding: 0.4rem;
    border-radius: 50%;
  }  
`