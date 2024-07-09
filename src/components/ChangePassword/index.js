import { useState, useEffect } from 'react';
import "./ChangePassword.css";
import PasswordRequirements from '../PasswordRequirements'

export default function ChangePassword() {

    let [changePasswordStatus, setChangePasswordStatus] = useState('default');
    let [isPasswordOnFocus, setIsPasswordOnFocus] = useState(false);

    const showPasswordRequirements = () => {
        setIsPasswordOnFocus(!isPasswordOnFocus);
    }

    const hidePasswordRequirements = () => {
        setIsPasswordOnFocus(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const newPassword = event.target[1].value;
        const body = JSON.stringify({ email: email, newPassword: newPassword });

        const rawResponse = await fetch('https://pwa-tp-api.onrender.com/users/changePassword', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        const content = await rawResponse.json();
        const message = content.message;
        setChangePasswordStatus(message);
        event.target.reset()
    }

    useEffect(() => {
    }, [changePasswordStatus]);
    return (
        <form className="container-fluid mb-4" onSubmit={handleSubmit}>
            <h3>Change Password</h3>
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
                    placeholder="Enter new password"
                />
            </div>
            {isPasswordOnFocus ? <PasswordRequirements/> : null }
            <div className="d-grid">
                <button onClick={hidePasswordRequirements} type="submit" className="btn btn-submit">
                    Submit
                </button>
            </div>
            {changePasswordStatus == "default" ? null :
                <div>
                    {
                        changePasswordStatus == "Password updated successfully"
                            ? <p className='sing-in-status success'>Password change successfully, you can sign in now</p>
                            : <p className='sing-in-status error'>{changePasswordStatus}</p>
                    }
                </div>
            }
        </form>
    )

}