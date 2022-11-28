import { Hero } from './components/Hero'
import { OurCoffee } from './components/OurCoffee'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <OurCoffee />
    </HomeContainer>
  )
}
