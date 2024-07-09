import "./Navegation.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navegation({ page }) {

    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    const singOut = async () => {
        const characters_id =  localStorage.getItem("characters_id");
        const email = localStorage.getItem("email");
        const body = JSON.stringify({email: email, characters_id: characters_id});

        const rawResponse = await fetch('https://pwa-tp-api.onrender.com/users/characters', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        const content = await rawResponse.json();
        localStorage.clear();
        navigate('/');
    };

    return (
        <nav className="nav-container navbar navbar-expand-lg w-100">
            <div className="container-fluid justify-content-between align-items-center">
                <div className="containe-fluid justify-content-center align-items-center">
                    <Link className="text-decoration-none" to="/characters"><h1 className="navbar-brand cursor-p">Rick & Morty</h1></Link>
                    <h2 className="navbar-brand cursor-p">Hi {user}!</h2>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="nav-buttons nav nav-pills">
                        <li className="nav-item" >
                            <Link className={page === "Characters" ? "nav-link text-decoration-none active" : "text-decoration-none nav-link"} to="/characters">Characters</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={page === "Contact" ? "nav-link text-decoration-none active" : "text-decoration-none nav-link"} to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={singOut} className="nav-link text-decoration-none">Sign Out</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
// operador ternario -> condicion ? accion-true : accion-false;

//JSX -> mezcla entre HTML y JS
//coloco entre llaves el codigo JS dentro del return()

//aplicamos la siguiente logica: si "hoja" es "Characters", marca al item con color verde, sino no .