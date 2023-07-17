import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducer/authReducer";
import celRducer from "../reducer/slices/celSlices"

export default configureStore ({
    reducer: { 
        auth: authReducer,
         cel: celRducer
    }


})