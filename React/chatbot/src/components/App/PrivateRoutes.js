import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    
    const auth =localStorage.getItem("token") ; // determine if authorized, from context or however you're doing it

    return auth ? <Outlet /> : <Navigate to="/" />;
}