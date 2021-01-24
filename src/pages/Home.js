import React from 'react'
import moment from 'moment'


function Home() {
const agora = moment(new Date());
   return (
   <div>
      <div className="jumbotron">
         <h2>Pagina inicial</h2>
         {agora.format("DD/MM/YYYY HH:mm")}
   
      </div>
   </div>

      )
}

export default Home;

