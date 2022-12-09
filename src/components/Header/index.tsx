import {
  ButtonWrapper,
  CartItensQuantity,
  HeaderContainer,
  LocationBadget,
} from './styles'
import LogoSvg from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { GetUserInformationFormContext } from '../../contexts/GetUserInformationFormContext'

export const Header = () => {
  const { itemsInCart } = useContext(CartContext)
  const { userInformation } = useContext(GetUserInformationFormContext)

  const { city, uf } = userInformation

  const itemsInCartLength = Object.values(itemsInCart).length

  const isCityNameEmpty = city === undefined

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoSvg} alt="" />
      </NavLink>
      <nav>
        {isCityNameEmpty ? null : (
          <LocationBadget>
            <MapPin size={22} weight="fill" /> {city}, {uf}
          </LocationBadget>
        )}

        <ButtonWrapper>
          {itemsInCartLength !== 0 ? (
            <>
              <CartItensQuantity>{itemsInCartLength}</CartItensQuantity>
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
