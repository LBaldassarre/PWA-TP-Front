import "./SignUp.css";

export default function SignUp() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        for (let i = 0; i < event.target.length; i++) {
            console.log(event.target[i].type, event.target[i].value)
        }
        const userName = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const body = JSON.stringify({ userName: userName, email: email, password: password });

        const rawResponse = await fetch('http://localhost:5000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        const content = await rawResponse.json();
        console.log(content.message);
        event.target.reset()
    }

    return (
        <form className="container-fluid mb-4" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                />
            </div>
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