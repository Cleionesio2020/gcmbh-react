import React, { useContext } from 'react'
import Rotas from './rotas/Rotas'
import RotasLogin from './rotas/RotaLogin'
import { Context } from './contexts/AuthContext'

function App() {

  const {logado} = useContext(Context)

  console.log(logado)
   

  return (
    //se estiver logado renderiza as rotas  da aplicacao, se naa, renderiza login
    logado ?  <Rotas/> : <RotasLogin/>
  )
}

export default App;
