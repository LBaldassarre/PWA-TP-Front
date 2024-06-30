import './SignIn.css';

export default function SignIn(){

    const handleSubmit = (event) => {
      event.preventDefault();
      for (let i = 0; i < event.target.length; i++) {
        console.log(event.target[i].type, event.target[i].value)
      }
    }
    
    return(
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