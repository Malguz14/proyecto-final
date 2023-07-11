import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect,useState } from 'react'
import Axios from 'axios';



const Home = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
 
   const key = "whMsTm/xc1Xf3CZwX2rYw==fWDCbeYFQk5hdisr";
   const headers = {
    'X-Api-Key': key,
   }
   const nombre = 'Michael Jordan'
   const url ='https://api.api-ninjas.com/v1/celebrity?name='+ nombre ;
  useEffect( ()=>{  
    Axios.get(url, {headers})
    .then(rest=> {console.log(rest.data)})
    .catch(error=> {console.log(error)})
  },[]

  )

    if (isLoading) {
      return <div>Cargando...</div>;
    }
  
    return (
      isAuthenticated && (
        <div>
          <h3>{user.name}</h3>
           </div>
      )
    );


}

export default Home