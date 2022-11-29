import { CompleteYourOrder } from './components/CompleteYourOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CheckoutContainer } from './styles'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <CompleteYourOrder />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
