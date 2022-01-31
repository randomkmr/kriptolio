import React from "react";
import jwt from "jwt-decode";
import useToken from "../App/useToken";
import { LoginPage } from "./LoginPage";


export const PortfolioPage = () => {
    const { token, setToken } = useToken();
    const user_email = Object.values(jwt(token))[1];    

    if (!token) {
        return <LoginPage setToken={setToken} />;
    }

    return (
        <h1>Your portfolio ${user_email}!</h1>
    )
}