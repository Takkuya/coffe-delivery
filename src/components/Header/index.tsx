import {
  ButtonWrapper,
  CartItensQuantity,
  HeaderContainer,
  LocationBadget,
} from './styles'
import LogoSvg from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoSvg} alt="" />
      </NavLink>
      <nav>
        <LocationBadget>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationBadget>
        <ButtonWrapper>
          {/* <CartItensQuantity>3</CartItensQuantity> */}
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </ButtonWrapper>
      </nav>
    </HeaderContainer>
  )
}
