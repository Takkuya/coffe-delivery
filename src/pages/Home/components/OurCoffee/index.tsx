import { CoffeeList } from '@/api'
import { CoffeeCard } from '@/components'
import { CoffeeWrapper, OurCoffeeContainer } from './styles'

export const OurCoffee = () => {

  return (
    <OurCoffeeContainer>
      <h2>Nossos Cafés</h2>
      <CoffeeWrapper>
        {CoffeeList.map((coffee, idx) => {
          return <CoffeeCard coffee={coffee} key={idx} />
        })}
      </CoffeeWrapper>
    </OurCoffeeContainer>
  )
}
