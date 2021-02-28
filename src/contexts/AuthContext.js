import React, { createContext, useState} from 'react'

export const  Context = createContext({});

function AuthProvider({children}){

    const [ user , setUser] = useState(null);

    return (
        <Context.Provider value={{ logado: !!user,setUser }}>
            {children}
        </Context.Provider>
    )

}
export default AuthProvider