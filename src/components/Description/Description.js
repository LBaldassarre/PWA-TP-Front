export default function Description({ status, especie, genero, origen, isFavorite, setHide }) {

    const ocultar = () => {
        setHide(true)
    }
    return (
        <div className="d-flex flex-column align-items-center w-100">
            <div className="d-flex flex-column align-items-end w-100">
                <button className="btn btn-active btn-card" onClick={ocultar}>X</button>
            </div>
            <div className="d-flex flex-column align-items-start w-100">
                <ul className="list-group">
                    <li className="list-group-item fw-bold">
                        Character Status {status}
                    </li>
                    <li className="list-group-item fw-bold">
                        <span className="fw-normal">Species</span> <br />{especie}
                    </li>
                    <li className="list-group-item fw-bold">
                        <span className="fw-normal">Origin</span> <br />{origen}
                    </li>
                    <li className="list-group-item fw-bold ">
                        <span className="fw-normal">Gender</span> <br /> {genero}
                    </li>
                </ul>
            </div>
        </div>

    )
}

//recibimos del componente Card, el setter setHide() y lo usamos en el boton de este componente para cambiar el estado hide de false a true.De esta manera , deja de renderizar el componente Description