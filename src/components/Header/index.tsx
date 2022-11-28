import { ShoppingCart, MapPin, Warning } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer, HeaderContainerShadow, Nav } from './styled'

import Logo from '../../assets/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const [ pageYPosition, setPageYPosition ] = useState(0);  

  const { 
    coffeeSelected,
    getCoordintes,
    locationState,
  } = useContext(CoffeeContext)

  const coffeeAmountOrder = coffeeSelected.length;
  
  function HandleCoordintes() {
    getCoordintes()
  }

  useEffect(() => {
    function getPageYAfterScroll() {
      setPageYPosition(window.scrollY)
    }
    window.addEventListener('scroll', getPageYAfterScroll)
  }, [])
  
  return (
    <>
      {pageYPosition > 0 ? (
        <HeaderContainerShadow>
          <div>
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>
    
            <Nav>
              <button onClick={HandleCoordintes}>
                {locationState === 'Localização Bloqueada' ? <Warning weight='fill' size={20} /> : <MapPin weight='fill' size={20} />}
                <span>{locationState}</span>
              </button>
    
              <NavLink to="/checkout">
                {coffeeAmountOrder > 0 && 
                  <div>
                    <span>{coffeeAmountOrder}</span>
                  </div>
                }
                <ShoppingCart weight='fill' size={20} />
              </NavLink>
            </Nav>
          </div>
        </HeaderContainerShadow>
      ) : (        
        <HeaderContainer>
          <div>
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>
    
            <Nav>
              <button onClick={HandleCoordintes}>
                {locationState === 'Localização Bloqueada' ? <Warning weight='fill' size={20} /> : <MapPin weight='fill' size={20} />}
                <span>{locationState}</span>
              </button>
    
              <NavLink to="/checkout">
                {coffeeAmountOrder > 0 && 
                  <div>
                    <span>{coffeeAmountOrder}</span>
                  </div>
                }
                <ShoppingCart weight='fill' size={20} />
              </NavLink>
            </Nav>
          </div>
        </HeaderContainer>
      )}    
    </>    
  )
}