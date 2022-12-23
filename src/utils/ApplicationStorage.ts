import { ReactState } from '@/@types'
import { AppName, AppVersion } from '@/constants'
import { CartContextValue, OrderFormData, PaymentMethods } from '@/context'
import { useState } from 'react'

type KeyManager<Value, DefaultValue> = {
  key: string
  alias: string
  get(): Value | DefaultValue
  set(to: Value): void
}

function createKeyManager<
  ValueType = any,
  DefaultValue extends ValueType = any,
>(
  forKey: string,
  defaultValue: DefaultValue,
): KeyManager<ValueType, DefaultValue> {
  const serializedAppName = AppName.replace(/\s/g, '-').toLowerCase()
  const key = `${serializedAppName}-${AppVersion}@${forKey}`

  return {
    key,
    alias: forKey,
    get() {
      const value = localStorage.getItem(key)

      if (!value) {
        return defaultValue
      }

      try {
        return JSON.parse(value) as ValueType
      } catch (e) {
        console.error('Failed to load key', {
          key,
        })
      }
      return defaultValue
    },
    set(to: ValueType) {
      try {
        const serializedValue = JSON.stringify(to, null, 1)
        localStorage.setItem(key, serializedValue)
      } catch (e) {
        console.error('Failed to set key', {
          key,
          to,
        })
      }
    },
  }
}

export const ApplicationStorage = {
  cart: createKeyManager<CartContextValue['items']>('cart', {}),
  order: createKeyManager<OrderFormData>('order', {}),
}

export function useLocalStorageState<
  T extends KeyManager<any, any>,
  Value = T extends KeyManager<infer V, infer DV> ? V | DV : never,
>(key: T): ReactState<Value> {
  const [state, _setState] = useState(key.get)

  const setState: typeof _setState = (valueOrFunction) => {
    let newValue = state

    if (typeof valueOrFunction === 'function') {
      newValue = valueOrFunction(newValue)
    } else {
      newValue = valueOrFunction
    }

    _setState(valueOrFunction)

    key.set(newValue)
  }

  return [state, setState]
}
