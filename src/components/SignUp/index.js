import { useState, useEffect } from 'react';
import "./SignUp.css";
import PasswordRequirements from '../PasswordRequirements'

export default function SignUp() {

    let [singUpStatus, setSingUpStatus] = useState('default');
    let [isPasswordOnFocus, setIsPasswordOnFocus] = useState(false);

    const showPasswordRequirements = () => {
        setIsPasswordOnFocus(!isPasswordOnFocus);
    }

    const hidePasswordRequirements = () => {
        setIsPasswordOnFocus(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userName = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const body = JSON.stringify({ userName: userName, email: email, password: password });

        const rawResponse = await fetch('https://pwa-tp-api.onrender.com/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        const content = await rawResponse.json();
        const message = content.message;
        setSingUpStatus(message);
        event.target.reset()
    }

    useEffect(() => {
    }, [singUpStatus]);
    return (
        <form className="container-fluid mb-4" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-2">
                <input
                    onClick={hidePasswordRequirements}
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                />
            </div>
            <div className="mb-2">
                <input
                    onClick={hidePasswordRequirements}
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                />
            </div>
            <div className="mb-2">
                <input
                    onClick={showPasswordRequirements}
                    onFocus={showPasswordRequirements}
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                />
            </div>
            {isPasswordOnFocus ? <PasswordRequirements/> : null }
            <div className="d-grid">
                <button onClick={hidePasswordRequirements} type="submit" className="btn btn-submit">
                    Submit
                </button>
            </div>
            {singUpStatus == "default" ? null :
                <div>
                    {
                        singUpStatus == "New user successfully created"
                            ? <p className='sing-in-status success'>User created, you can sign in now</p>
                            : <p className='sing-in-status error'>{singUpStatus}</p>
                    }
                </div>
            }
        </form>
    )

}