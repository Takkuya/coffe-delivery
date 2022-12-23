import {
  ButtonWrapper,
  CartItensQuantity,
  HeaderContainer,
  LocationBadget,
} from './styles'

import { MapPin, ShoppingCart, Logo } from '@/assets'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '@/context'

export const Header = () => {
  const cart = useCartContext()

  const orderInformation = cart.order

  const { city, UF } = orderInformation
  
  const hasCityName = typeof city === 'string' && !!city.trim()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="" />
      </NavLink>
      <nav>
        {!hasCityName ? null : (
          <LocationBadget>
            <MapPin size={22} weight="fill" /> {city}, {UF}
          </LocationBadget>
        )}

        <ButtonWrapper>
          {!cart.isEmpty ? (
            <>
              <CartItensQuantity>{cart.itemCount}</CartItensQuantity>
              <NavLink to="/checkout">
                <ShoppingCart size={22} weight="fill" />
              </NavLink>
            </>
          ) : null}
        </ButtonWrapper>
      </nav>
    </HeaderContainer>
  )
}
