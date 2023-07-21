import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../auth/Logout.css';


export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <> 
    
   <div >
   
    <button  type="button" class="btn btn-outline-info"  onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesión
    </button><body  id="cerrar">
 <h3>Hlasdjdfkgifdghkdfksgjdhsjg</h3>
 <img  src="\auth\visita.png" ></img>
     </body>
      </div>
 </> );
};