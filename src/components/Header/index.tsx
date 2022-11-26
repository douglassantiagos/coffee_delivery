import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer, HeaderContainerShadow, Nav } from './styled'

import Logo from '../../assets/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const [ pageYPosition, setPageYPosition ] = useState(0);

  const { coffeeSelected } = useContext(CoffeeContext)

  const coffeeAmountOrder = coffeeSelected.length;

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
              <button>
                <MapPin weight='fill' size={20} />
                <span>Porto Alegre, RS</span>
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
              <button>
                <MapPin weight='fill' size={20} />
                <span>Porto Alegre, RS</span>
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