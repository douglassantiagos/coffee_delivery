import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { BackgroundBanner, Content, CoffeeList, IntroContainer, ImageBanner, Information, Title, ListContainer } from './styled'

import { CoffeeCard } from './components/CoffeeCard';
import { InfoWithIcon } from './components/InfoWithIcon/Index';
import { coffeeData } from '../../services/coffeeData';

import coffeeBanner from '../../assets/ImageBanner.svg';

export function Home() {
  const { base, brand } = useTheme()

  return (
    <>    
      <BackgroundBanner>
        <IntroContainer>
          <Content>
            <Title>
              <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</p>
            </Title>

            <Information>
              <InfoWithIcon
                iconBg={brand['yellow-dark']}
                icon={<ShoppingCart weight='fill' size={30} />}
                text="Compra simples e segura"
              />
              <InfoWithIcon
                iconBg={base.text}
                icon={<Package weight='fill' size={30} />}
                text="Embalagem mantém o café intacto"
              />
              <InfoWithIcon
                iconBg={brand['yellow']}
                icon={<Timer weight='fill' size={30} />}
                text="Entrega rápida e rastreada"
              />
              <InfoWithIcon
                iconBg={brand.purple}
                icon={<Coffee weight='fill' size={30} />}
                text="O café chega fresquinho até você"
              />
            </Information>
          </Content>

          <ImageBanner>
            <img 
              src={coffeeBanner}
              alt="Imagem de um copo de café com a logo do coffee delivery"
            />
          </ImageBanner>
        </IntroContainer>
      </BackgroundBanner>

      <CoffeeList>
        <h1>Nossos cafés</h1>

        <ListContainer>
          {Object.entries(coffeeData).map(([key, data]) => {
            return (
              <CoffeeCard 
                key={key}
                data={data}
              />
            )
          })}
        </ListContainer>
      </CoffeeList>
    </>
  )
}
