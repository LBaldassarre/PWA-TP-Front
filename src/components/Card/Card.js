import { useState } from 'react';

import Description from '../Description/Description';

import "./Card.css"

export default function Card({ infoPersonaje, isFavorite }) {

    let [hide, setHide] = useState(true);
    let [isFav, setIsFav] = useState(isFavorite);

    const showMore = () => {
        setHide(false)
    }

    const handleFavorite = () => {
        setIsFav(!isFav);

        if (!isFav) {
            let characters_id = JSON.parse(localStorage.getItem("characters_id"));
            characters_id.push(infoPersonaje.id);
            localStorage.setItem("characters_id",JSON.stringify(characters_id));
        } else {
            let characters_id = JSON.parse(localStorage.getItem("characters_id"));
            let index = characters_id.indexOf(infoPersonaje.id);
            characters_id.splice(index, 1);
            localStorage.setItem("characters_id",JSON.stringify(characters_id));
        }

    }

    return (
        <div className={
            hide === false ? "card card-open rounded d-flex flex-row aling-items-center justify-content-between" : "card rounded d-flex flex-row aling-items-center justify-content-between"
        }
        >
            <div className="card-inner d-flex flex-column aling-items-center justify-content-between">
                <div className={
                    hide === false ? "card-presentation d-flex flex-column aling-items-center h-100" : "card-presentation d-flex flex-column aling-items-center justify-content-between h-100"
                }
                >
                    {isFav ? <i onClick={handleFavorite}className={hide === false ? "d-none" :"bi bi-heart-fill"}></i> : <i onClick={handleFavorite} className={hide === false ? "d-none" :"bi bi-heart"}></i>}
                    <img className="img-card card-img-top" src={infoPersonaje.image} />
                    <h3 className="card-title text-center">{infoPersonaje.name}</h3>
                    <button className={hide === false ? "d-none" : "btn-card btn btn-active d-flex align-self-end m-0"} onClick={showMore}>Know More</button>
                </div>

                {
                    hide === false ? <div className="details-container rounded-2 d-flex flex-row justify-content-between aling-items-center"> <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide} /> </div> : ''
                }

            </div>

        </div>
    )

}

//le pasamos algo de informacion de cada personaje al componente "Description" la informacion que necesita para la lista

//para lograr que se oculte o aparezca cuando se clickean los botones,vamos a usar eventos y operador ternario

//operador ternario condicion?accion-true:accion-false;