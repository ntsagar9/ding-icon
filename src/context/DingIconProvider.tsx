import React, { createContext, useContext, useMemo } from 'react'

export type DingIconContextType = {
  color?: string
  size?: number | string
  className?: string
}

const DingIconContext = createContext<DingIconContextType>({
  color: '#717375',
  size: '1em'
})

export const DingIconProvider: React.FC<{
  children: React.ReactNode
} & DingIconContextType> = ({ children, color, size, className }) => {
  const value = useMemo(() => ({ color, size, className }), [color, size, className])

  return (
    <DingIconContext.Provider value={value}>
      {children}
    </DingIconContext.Provider>
  )
}

export const useDingIcon = () => useContext(DingIconContext)