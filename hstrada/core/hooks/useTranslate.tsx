import React, { createContext, ReactNode, useContext, useState } from 'react'

interface TranslationProviderProps {
  children: ReactNode
}

type TranslationCountry = 'pt' | 'en'

interface TranslationContextData {
  country: TranslationCountry
  changeCountry: () => void
}

const TranslationContext = createContext<TranslationContextData>(
  {} as TranslationContextData
)

export function TranslationProvider({ children }: TranslationProviderProps) {
  const [country, setCountry] = useState<TranslationCountry>('en')

  const changeCountry = () => {
    if (country === 'pt') {
      setCountry('en')
      return
    }
    setCountry('pt')
  }

  return (
    <TranslationContext.Provider value={{ country, changeCountry }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  return context
}
