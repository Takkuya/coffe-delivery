import { CartButton, HeaderContainer, LocationBadget } from './styles'
import LogoSvg from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoSvg} alt="" />
      <nav>
        <LocationBadget>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationBadget>
        <CartButton>
          <Link to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
