import React from 'react'

const Context = React.createContext()

export const Provider = ({ children }) => {
    return <Context.Provider value={5}>{children}</Context.Provider>
}