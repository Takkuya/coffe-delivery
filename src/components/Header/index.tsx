import { CartButton, HeaderContainer, LocationBadget } from './styles'
import LogoSvg from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoSvg} alt="" />
      <nav>
        <LocationBadget>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationBadget>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}
