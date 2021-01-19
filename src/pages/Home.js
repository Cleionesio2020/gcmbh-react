import React, { useState } from 'react'
import { FaBeer ,FaAtom,FaAdn} from 'react-icons/fa';
import Pronto from './Pronto';

function Home() {
   const [pronto,setPronto]=useState({
      tipo:'',inicio:'', fim:''
   })

const vai =(event)=>{
event.preventDefault();
console.log(pronto)
}

   return (
   <div>
      <div className="jumbotron">
         <h2>Pagina inicial</h2>
         <input type='text' name='a'  onChange={(e)=>setPronto({...pronto,inicio:e.target.value})} /><br/>
         <input type='text'  name='b' onChange={(e)=>setPronto({...pronto,fim:e.target.value})} /> <br/>

         <input type='checkbox' value='p'  checked={pronto.tipo==='p' } onChange={(e)=>setPronto({...pronto,tipo:e.target.value})} />
         <input type='checkbox' value='f'  checked={pronto.tipo==='f' } onChange={(e)=>setPronto({...pronto,tipo:e.target.value})}/>
         <input type='checkbox' value='d'  checked={pronto.tipo==='d' } onChange={(e)=>setPronto({...pronto,tipo:e.target.value})}/>
   
   
<button onClick={vai}>ok</button>
      </div>
   </div>

      )
}

export default Home;

