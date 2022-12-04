import { Minus, Plus } from 'phosphor-react'
import { IncreaseOrDescreseCoffeeButtonWrapper } from './styles'

type IncreaseOrDecreaseCoffeeQuantityButtonProps = {
  coffeeCount: number
  onIncreaseCoffeeCount: () => void
  onDecreaseCoffeeCount: () => void
  coffeeCountIsLessOrEqualThanOne: boolean
  currentQuantity?: number
}

export const IncreaseOrDecreaseCoffeeQuantityButton = ({
  coffeeCount,
  onIncreaseCoffeeCount,
  onDecreaseCoffeeCount,
  coffeeCountIsLessOrEqualThanOne,
  currentQuantity,
}: IncreaseOrDecreaseCoffeeQuantityButtonProps) => {
  return (
    <IncreaseOrDescreseCoffeeButtonWrapper>
      <button
        onClick={onDecreaseCoffeeCount}
        disabled={coffeeCountIsLessOrEqualThanOne}
      >
        <Minus size={16} weight="bold" />
      </button>
      <span>
        {currentQuantity !== undefined ? currentQuantity : coffeeCount}
      </span>
      <button onClick={onIncreaseCoffeeCount}>
        <Plus size={16} weight="bold" />
      </button>
    </IncreaseOrDescreseCoffeeButtonWrapper>
  )
}
