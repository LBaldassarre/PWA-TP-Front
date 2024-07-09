import { useState, useEffect } from 'react';

import Card from "../Card/Card";
import Filters from '../Filters/Filters';

import "./sectionCards.css"

export default function SectionCards() {
    //conseguir la informacion(array) -> API Rick y Morty (fetch) 
    //crear una tarjeta por cada personaje
    //iterar con el map para generar una tarjeta por cada personaje

    let [listaPersonajes, setListaPersonajes] = useState([]);//genero un estado que como inicio es un array vacio que luego lo modifico con la info que traigo de la API;
    let [personajesCompleto, setPersonajesCompleto] = useState([])
    let [filtrosAplicados, setFiltrosAplicados] = useState([]);//lista que inicia vacia de todos los filtros que tenemos marcados para aplicar

    const traerPersonajes = async () => {

        let info = await fetch("https://rickandmortyapi.com/api/character")//ejecutar la peticion a esa direccion
            .then((resp) => { return resp.json() })//accionar si logra obtener la info
            .then((data) => { return data.results })
            //siguiente accion que hacemos si todo salio bien.En este caso aprovechamos que sabemos que esta API en particular devuelve la lista de personajes dentro de la propiedad "results" 
            .catch((error) => { console.log(error) })//accionar si no logra obtenerla

        //json() -> metodo que evalua lo que le pasemos como JSON y lo parsea , lo tranasforma a una array|objeto

        setListaPersonajes(info)//cambio el estado de listaPersonajes de vacio a la lista con todos los personajes que traemos de la API y va a re-renderizar el componente - actualizarlo

        setPersonajesCompleto(info)
    };

    //funcion que agrega o saca filtros de la lista de filtros a aplicar (actualizo la lista de los filtros a aplicar)

    const filterCharacter = (target) => {
        //se fija se se "pulso" o "despulso" un filtro y arma la lista de todos los filtros a aplicar
        if (target.checked === true) {
            //si se pulso(marcamos el checkbox) agrega a una lista el filtro aplicado
            setFiltrosAplicados([...filtrosAplicados, target.value])

        } else {
            //si "despulso" el filtro
            setListaPersonajes(personajesCompleto)
            let filtrosNuevos = filtrosAplicados.filter((filtro) => filtro !== target.value);//saco el filtro aplicado de la lista
            setFiltrosAplicados(filtrosNuevos)//cambio los filtros aplicados

        }
    }


    useEffect(() => {
        setListaPersonajes(personajesCompleto)
        //por cada filtro que tiene pulsado, modifica la informacion de "listaPersonaje"
        filtrosAplicados.forEach((data) => {
            if (data === "Dead" || data === "Alive") {
                let dataFiltrada = listaPersonajes.filter((personaje) => personaje.status === data);
                setListaPersonajes(dataFiltrada)
            } else if (data === "Female" || data === "Male") {
                let dataFiltrada = listaPersonajes.filter((personaje) => personaje.gender === data);
                setListaPersonajes(dataFiltrada)
            } else if (data === "Unknown") {
                let dataFiltrada = listaPersonajes.filter((personaje) => personaje.origin.name === "unknown");
                setListaPersonajes(dataFiltrada)
            } else if (data === "Favorite") {
                let dataFiltrada = listaPersonajes.filter((personaje) => JSON.parse(localStorage.getItem("characters_id")).includes(personaje.id));
                setListaPersonajes(dataFiltrada)
            }
        })

    }, [filtrosAplicados])
    //este useEffect se ejecuta cada vez que ve que se modifica la lista de filtros a aplicar

    useEffect(() => {
        const saveFavorites = async () => {
            const characters_id = localStorage.getItem("characters_id");
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
            }

        traerPersonajes();
        window.addEventListener('beforeunload', saveFavorites);
        return () => {
            window.removeEventListener('beforeunload', saveFavorites);
          };
    }, []);
    //a penas se cargue por primera vez el componente "SectionCards",ejecute la funcion traerPersonajes
    return (
        <section className="d-flex flex-column align-items-center justify-content-center">


            <Filters filterCharacter={filterCharacter} />

            <div className='cards-container d-flex row m-0 aling-items-center justify-content-center w-100 pt-5'>
                {
                    listaPersonajes.map((personaje) => {
                        // return  <Card key={personaje.id} infoPersonaje={personaje}/>
                        const isFavorite = JSON.parse(localStorage.getItem("characters_id")).includes(personaje.id) ? true : false;
                        return <Card key={personaje.id} infoPersonaje={personaje} isFavorite={isFavorite} />
                    })
                }
            </div>

        </section>
    )
};

//creamos una funcion que filtra entre los personajes que tenemos y esta funcion se la pasamos al componente Filters ; y esta ultima a su vez a cada filtro ;para que cuando se pulse dicho filtro se ejecute la funcion

//el parametro "data" dela funcion filterCharacter contiene el "value" del input que se pulso