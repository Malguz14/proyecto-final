import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../auth/Logout.css';


export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <> 
    
   <div >
   <body  id="cerrar">
    <button  type="button"  class="btn btn-light"  onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesión
    </button>
 <h3 className="poc">VUELVA PRONTO</h3>
 <img id="imagen2" src="https://th.bing.com/th/id/OIP.tdykZQ0LRgtgeiHT18xVNgHaEz?pid=ImgDet&rs=1" ></img>

     </body>
      </div>
 </> );
};