import { createContext, ReactNode, useEffect, useState } from 'react'

type GetUserInformationFormContextProviderProps = {
  children: ReactNode
}

export type UserAddress = {
  cep: string
  street: string
  homeNum: string
  complement?: string
  neighborhood: string
  city: string
  uf: string
}

type GetUserInformationFormContextType = {
  userInformation: UserAddress
  paymentPreference: string
  getUserAddress: (address: UserAddress) => void
  getFormOfPayment: (formOfPaument: string) => void
}

export const GetUserInformationFormContext = createContext(
  {} as GetUserInformationFormContextType,
)

export const GetUserInformationFormProvider = ({
  children,
}: GetUserInformationFormContextProviderProps) => {
  const [userInformation, setUserInformation] = useState<UserAddress>(
    {} as UserAddress,
  )
  const [paymentPreference, setPaymentePreference] = useState('')

  function getItemsFromLocalStorage() {
    const savedAddress = localStorage.getItem(
      '@coffee-delivery:store-user-address-1.0.0',
    )

    if (savedAddress) {
      setUserInformation(JSON.parse(savedAddress))
    }
  }

  useEffect(() => {
    getItemsFromLocalStorage()
  }, [])

  function getUserAddress(address: UserAddress) {
    setUserInformation(address)

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
    <GetUserInformationFormContext.Provider
      value={{
        userInformation,
        paymentPreference,
        getUserAddress,
        getFormOfPayment,
      }}
    >
      {children}
    </GetUserInformationFormContext.Provider>
  )
}
