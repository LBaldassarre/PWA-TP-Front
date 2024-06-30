import { Link } from 'react-router-dom';
import './BotonInicio.css';

export default function BotonInicio({nombreBoton, pasaje}){
    return(
        <Link className="btn-inicio btn " to={pasaje}>{nombreBoton}</Link>
    )
}