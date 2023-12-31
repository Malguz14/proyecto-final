import { useAuth0 } from '@auth0/auth0-react';
import React, { Fragment } from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react';
import Celebrities_List from '../components/Celebrities_List';
import './Home.css'

const Home = () => {
  const { user } = useAuth0();
  const [celebrity, setCelebrity] = useState([]);

  const key = process.env.REACT_APP_KEY;
  const headers = {
    'X-Api-Key': key
  }

  const url = process.env.REACT_APP_URL_APP;
  useEffect(() => {
    console.log(key);

    Axios.get(url, { headers })
      .then(resp => {
        console.log(resp.data);
        setCelebrity(resp.data);

      })

      .catch(error => { console.log(error) })
  }, []

  )

  return (
    <body id="imagen">
    <div> <h3 className="hola">{user.name}</h3>
          <Celebrities_List celebrities={celebrity} />
    </div>
    </body>
  )

}

export default Home
