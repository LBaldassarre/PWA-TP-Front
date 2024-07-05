import './SignIn.css';

export default function SignIn() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    for (let i = 0; i < event.target.length; i++) {
      console.log(event.target[i].type, event.target[i].value)
    }
    const email = event.target[0].value;
    const password = event.target[1].value;
    const body = JSON.stringify({email: email, password: password});

    const rawResponse = await fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    });
    const content = await rawResponse.json();
    localStorage.setItem("characters_id",content.data.characters_id);
    localStorage.setItem("email",content.data.email);
    console.log(content.mensaje);
    console.log(localStorage.getItem("characters_id"))
    event.target.reset()
  }

  return (
    <form className='container-fluid mb-4' onSubmit={handleSubmit}>
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
    </form>
  )

}