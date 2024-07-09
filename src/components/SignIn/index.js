import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

export default function SignIn() {

  const navigate = useNavigate();

  let [singInStatus, setSingInStatus] = useState('default');
  // 'default' = user did not try to sign in
  // 'wrong email' = user try to sign in with an email not found in the db
  // 'wrong password' = user try to sign with a valid email but wrong password
  // 'success' = email and password combination was found in the db

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    const body = JSON.stringify({ email: email, password: password });

    const rawResponse = await fetch('https://pwa-tp-api.onrender.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    });
    const content = await rawResponse.json();
    const message = content.message;
    setSingInStatus(message);

    if (message == 'Log In Successful') {
      const userRaw = await fetch(`https://pwa-tp-api.onrender.com/users/${email}`)
      const user = await userRaw.json();
      localStorage.setItem("user", user.user.userName)
      localStorage.setItem("characters_id", user.user.characters_id);
      localStorage.setItem("email", user.user.email);
      setTimeout(() => {
        navigate('/characters')
      }, 2000)
    }

    event.target.reset()
  }

  useEffect(() => {
  }, [singInStatus]);

  return (
      <form className='container-fluid mb-1' onSubmit={handleSubmit}>
        <h3>Sign In</h3>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </div>
      {singInStatus == "default" ? null :
        <div>
          {
          singInStatus == "Log In Successful" 
            ? <p className='sing-in-status success'>{singInStatus + ' (Redirecting in 2s)'}</p> 
            : <p className='sing-in-status error'>{singInStatus}</p> 
          }
        </div>
      }
    </form>
  )

}