import * as React from 'react'
import { Action } from '~/lib/actions'
import { Model, initialModel, update } from '~/lib/model'

const ModelContext = React.createContext()

interface ProviderProps {
  children?: React.ReactNode;
}

export function ModelProvider ({ children }: ProviderProps): React.FC {
  const value = React.useReducer(update, initialModel)
  return (
    <ModelContext.Provider value={value}>{children}</ModelContext.Provider>
  )
}

export function useModel (): [Model, React.Dispatch<Action>] {
  return React.useContext(ModelContext)
}
