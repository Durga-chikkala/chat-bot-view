import React from "react";
import { Outlet } from "react-router-dom";
import AuthNavbar from "../Navbar/AuthNavbar";
import AuthFooter from "../Footer/AuthFooter";
const Auth = () => {
    return (
        <React.Fragment>
            <AuthNavbar />
            <Outlet />
            <AuthFooter />
        </React.Fragment>
    );
}
export default Auth;