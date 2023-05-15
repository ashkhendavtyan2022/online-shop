import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../../Context";

export const AppComponent = () => {
    const {token, setToken} = useGlobalContext();

    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token) {
            setToken(token)
        }
    }, [])


    return <>
    {token? }
    </>
}