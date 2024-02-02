import boton from './Boton.module.css'
import { Link } from 'react-router-dom'

const Boton =(props)=>{
    return(
        <Link className={boton.btn} to={props.link}><li><img className={boton.ico} src={props.ico}></img>{props.nom}</li></Link>
    )
}

export default Boton