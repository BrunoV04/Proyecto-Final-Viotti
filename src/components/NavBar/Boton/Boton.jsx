import boton from './Boton.module.css'
import { Link } from 'react-router-dom'

const Boton = (props) => {
    return (
        <>
        <Link className={boton.btn} onClick={props.onClick}><img src={props.ico}></img><li>{props.nom}</li></Link>
        </>
    )
}

export default Boton