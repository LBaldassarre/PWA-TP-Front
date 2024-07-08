import "./Characters.css"
import Navegation from "../../components/Navagation";//traigo el componente de la navegacion
import SectionCards from "../../components/SectionCards/SectionCards";//traigo el componente de la seccion de tarjetas

export default function Characters() {

    return (
        <div>
            <Navegation page="Characters" />
            <SectionCards />
        </div>

    )
}

//pasamos la prop "hoja" al componente Navegation