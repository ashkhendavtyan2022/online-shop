import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../../Context";
import "./style.css";

export const Admin = () => {
    const {profile, setProfile} = useGlobalContext();
    const [error, setError] = useState({
        errorEmail: "",
        errorPassword: "",
    })

    const Change = (e) => {
        setProfile({...profile, [e.target.name] : e.target.value})
    }
}