import { AppName, AppVersion, LocalStorageKeys } from "@/constants"
import { CartContextValue } from "@/contexts/Cart/types"

type KeyManager<Value, DefaultValue> = {
    key: string
    alias: string
    get(): Value | DefaultValue
    set(to: Value): void
}


function createKeyManager<ValueType = any, DefaultValue extends ValueType = any>(forKey: string, defaultValue: DefaultValue): KeyManager<ValueType, DefaultValue>{
    const key = `${AppName}-${AppVersion}@${forKey}`


    return {
        key,
        alias: forKey,
        get() {
            const value = localStorage.getItem(key)
    
            if(!value){
                return defaultValue
            }
    
            try{
                return JSON.parse(value) as ValueType
            }catch(e){
                console.error('Failed to load key', {
                    key
                })
            }
            return defaultValue
    
        },
        set(to:ValueType){
            try {
                const serializedValue = JSON.stringify(to, null, 1)
                localStorage.setItem(key, serializedValue)

            }catch(e){
                console.error('Failed to set key', {
                    key, to
                })
            }

        }
    }
}



export const ApplicationStorage = {
    cart: createKeyManager<CartContextValue['items']>('cart', {})
}
