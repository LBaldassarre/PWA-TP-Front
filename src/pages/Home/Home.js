import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import "./Home.css";

export default function Home() {

    const navigate = useNavigate();
    const isLocalStorageEmpty = window.localStorage.length === 0;

    const ifSingInToCharacters = () => {
        if (!isLocalStorageEmpty) {
            navigate('/characters');
        }
    }

    useEffect(() => {
        ifSingInToCharacters();
    }, []);

    let [signIn, setSingIn] = useState(true);
    let [signUp, setSingUp] = useState(false);

    const handleSingIn = () => {
        setSingIn(true);
        setSingUp(false);
    }

    const handleSingUp = () => {
        setSingIn(false);
        setSingUp(true);
    }

    return (
        <div className="container-fluid d-grid vh-100 w-100">

            <div className="container-home align-self-center">
                <h1 className="h-1 text text-center">Proyect Rick & Morty</h1>
                <h2 className="text-center mt-2">Welcome to Rick & Morty Proyect!</h2>
                <h2 className="text-center mt-2">Lets go!</h2>
                <ul className="home-buttons align-self-center justify-self-center d-flex justify-content-center">
                    <button className={signIn ? "btn btn-inicio-active" : "btn btn-inicio"} onClick={handleSingIn}>Sing In</button>
                    <button className={signUp ? "btn btn-inicio-active" : "btn btn-inicio"} onClick={handleSingUp}>Sing Up</button>
                </ul>
                {signIn ? <SignIn /> : <SignUp />}
            </div>

        </div>

    )
}

//armando la primer hoja de nuestro proyecto

//