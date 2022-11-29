import { Minus, Plus } from 'phosphor-react'
import { IncreaseOrDescreseCoffeeButtonWrapper } from './styles'

export const IncreaseOrDecreaseCoffeeButton = () => {
  return (
    <IncreaseOrDescreseCoffeeButtonWrapper>
      <button>
        <Minus size={16} weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus size={16} weight="bold" />
      </button>
    </IncreaseOrDescreseCoffeeButtonWrapper>
  )
}
