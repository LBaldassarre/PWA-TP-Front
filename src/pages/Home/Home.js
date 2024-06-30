import BotonInicio from "../../components/BotonInicio";

import"./Home.css";

export default function Home(){
    return(
        <div className="container-fluid d-grid vh-100 w-100">
        
            <div className="container-home align-self-center">
                <h1 className="h-1 text text-center">Proyect Rick & Morty</h1>
                <h2 className="text-center mt-4">Welcome to Rick & Morty Proyect!</h2>
                <p className="text-center mt-4">This proyect was made for practising React and to made a functional website.</p>
                <p className="text-center mt-4">In this website you can know information of the characters of this animated series.</p>
                <p className="text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion.
                </p>
                <h2 className="text-center mt-5">Lets go!</h2>
                <ul className="home-buttons align-self-center justify-self-center d-flex justify-content-center">
                    <BotonInicio nombreBoton='Characters' pasaje="/characters"/>
                    <BotonInicio nombreBoton="Contact" pasaje="/contact"/> 
                </ul>       
            </div>

        </div>

    )
}

//armando la primer hoja de nuestro proyecto

//