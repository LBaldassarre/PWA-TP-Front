import { useState } from 'react';

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

import"./Home.css";

export default function Home(){

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

    return(
        <div className="container-fluid d-grid vh-100 w-100">
        
            <div className="container-home align-self-center">
                <h1 className="h-1 text text-center">Proyect Rick & Morty</h1>
                <h2 className="text-center mt-2">Welcome to Rick & Morty Proyect!</h2>
                {/* <p className="text-center mt-4">This proyect was made for practising React and to made a functional website.</p>
                <p className="text-center mt-4">In this website you can know information of the characters of this animated series.</p>
                <p className="text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                </p> */}
                <h2 className="text-center mt-2">Lets go!</h2>
                <ul className="home-buttons align-self-center justify-self-center d-flex justify-content-center">
                    <button className={signIn ? "btn btn-inicio-active" : "btn btn-inicio"} onClick={handleSingIn}>Sing In</button>
                    <button className={signUp ? "btn btn-inicio-active" : "btn btn-inicio"} onClick={handleSingUp}>Sing Up</button>
                </ul> 
                {signIn ? <SignIn/> : <SignUp/>}   
            </div>

        </div>

    )
}

//armando la primer hoja de nuestro proyecto

//