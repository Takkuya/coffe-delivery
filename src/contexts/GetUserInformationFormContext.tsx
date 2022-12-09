import { createContext, ReactNode, useState } from 'react'

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

  function getUserAddress(address: UserAddress) {
    setUserInformation(address)
  }

  function getFormOfPayment(formOfPayment: string) {
    setPaymentePreference(formOfPayment)
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
