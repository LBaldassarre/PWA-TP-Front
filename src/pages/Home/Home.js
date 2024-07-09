import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import ChangePassword from '../../components/ChangePassword';

import "./Home.css";

export default function Home() {

    let [serverStatus, setServerStatus] = useState(false);

    const serverResponse = async () => {
        const resp = await fetch('https://pwa-tp-api.onrender.com/users/serverStatus');
        const content = await resp.json();
        const serverMessage = content.message

        if (serverMessage == 'server running') {
            setServerStatus(true);
        }

        return serverMessage;
    }

    const check = serverResponse();

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

    let [formStatus, setFormStatus] = useState('SingIn');

    const handleSingIn = () => {
        setFormStatus('SingIn');
    }

    const handleSingUp = () => {
        setFormStatus('SingUp');
    }

    const handleChangePassword = () => {
        setFormStatus('ChangePassword');
    }

    useEffect(() => {
        ;
    }, [formStatus, serverStatus]);

    return (
        <div className="container-fluid d-grid vh-100 w-100">
            <div>
                {
                    serverStatus
                        ? <p className='sing-in-status success'>Server Running</p>
                        : <p className='sing-in-status error'>Server starting, please wait</p>
                }
            </div>
            <div className="container-home align-self-center">
                <h1 className="h-1 text text-center">Proyect Rick & Morty</h1>
                <h2 className="text-center mt-2">Welcome to Rick & Morty Proyect!</h2>
                <h2 className="text-center mt-2">Lets go!</h2>
                <ul className="home-buttons align-self-center justify-self-center d-flex justify-content-center">
                    <button className={formStatus === 'SingIn' ? "btn btn-inicio-active" : "btn btn-inicio"} onClick={handleSingIn}>Sing In</button>
                    <button className={formStatus === 'SingUp' ? "btn btn-inicio-active" : "btn btn-inicio"} onClick={handleSingUp}>Sing Up</button>
                </ul>
                {(() => {
                    if (formStatus === 'SingUp') {
                        return <SignUp />
                    } else if (formStatus === 'ChangePassword') {
                        return <ChangePassword />
                    } else {
                        return (<div>
                            <SignIn />
                            <div className='container-fluid' onClick={handleChangePassword}><a href="#" className='pe-auto'>Change Password</a></div>
                        </div>)
                    }
                })()}
            </div>

        </div>

    )
}