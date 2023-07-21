import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"
import { useDispatch } from "react-redux";
import login from "../actions/userActions"
import '../auth/Logout.css';


export const Login = () => {
    const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();

    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (error) {
            console.log(error);
        }

    };
    useEffect(()=>{
        if (isAuthenticated && user) {
            dispatch(login(user))};
    }, 
    [isAuthenticated, user, dispatch ]);

   if (isLoading){
    return <div>Cargando...</div>;
   }
    return (
        <div id="titulo1">
    <div className="hol">
        <br/>
    <button type="button" class="btn btn-outline-light" onClick={handleLogin} >Acceder</button>
 </div>
 <br/>
 <br/>
 <img id="imagen1"  src="https://cdn.pixabay.com/photo/2015/08/24/20/13/welcome-905562_1280.png" ></img>

  </div>  )
};