import { createContext, ReactNode, useEffect, useState } from 'react'

type GetOrderInformationFormContextProviderProps = {
  children: ReactNode
}

export type OrderInformation = {
  cep: string
  street: string
  homeNum: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
  formOfPayment: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro'
}

type GetOrderInformationFormContextType = {
  orderInformation: OrderInformation
  paymentPreference: string
  getOrderInformation: (address: OrderInformation) => void
  getFormOfPayment: (formOfPayment: string) => void
}

export const GetOrderInformationFormContext = createContext(
  {} as GetOrderInformationFormContextType,
)

export const GetOrderInformationFormProvider = ({
  children,
}: GetOrderInformationFormContextProviderProps) => {
  const [orderInformation, setOrderInformation] = useState<OrderInformation>(
    {} as OrderInformation,
  )
  const [paymentPreference, setPaymentePreference] = useState('')

  function getItemsFromLocalStorage() {
    const savedAddress = localStorage.getItem(
      '@coffee-delivery:store-user-address-1.0.0',
    )

    if (savedAddress) {
      setOrderInformation(JSON.parse(savedAddress))
    }
  }

  useEffect(() => {
    getItemsFromLocalStorage()
  }, [])

  function getOrderInformation(address: OrderInformation) {
    setOrderInformation(address)

    const addressJSON = JSON.stringify(address)
    localStorage.setItem(
      '@coffee-delivery:store-user-address-1.0.0',
      addressJSON,
    )
  }

  function getFormOfPayment(formOfPayment: string) {
    setPaymentePreference(formOfPayment)

    const formOfPaymentJSON = JSON.stringify(formOfPayment)

    localStorage.setItem(
      '@coffee-delivery:store-user-address-1.0.0',
      formOfPaymentJSON,
    )
  }

  return (
    <GetOrderInformationFormContext.Provider
      value={{
        orderInformation,
        paymentPreference,
        getOrderInformation,
        getFormOfPayment,
      }}
    >
      {children}
    </GetOrderInformationFormContext.Provider>
  )
}
