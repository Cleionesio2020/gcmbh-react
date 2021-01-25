import React, { Component, useState } from 'react'
import AsyncSelect from 'react-select'
import Api from '../services/api'

export default function SelectServidorNome() {
  
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


function buscaDados(){
  Api.get(`/servidores_nomef/${selecionado}`)
  .then(response=>{
   
    
    const places = response.data.map((item) => {
      return ({
          label: item.nomeCompleto,
          value: item.nomeCompleto,
      });
  });

 


   
  })

}


  const[selecionado,setSelecionado]=useState("");

function handleInputChange(valor){
  console.log(valor)
  setSelecionado(valor)
}

function alerta(){
  console.log("fsdfsdfsdf")
}

  return (
    <AsyncSelect 
    loadOptions={buscaDados} 
    onChange={valor=>handleInputChange(valor)}
   
    />
  )
}
