import CountCss from './ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({ stock, inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className={CountCss.container}>
            <div className={CountCss.controles}>
                <button className={CountCss.btn} onClick={decrementar}>-</button>
                <h4 className={CountCss.numero}>{cantidad}</h4>
                <button className={CountCss.btn} onClick={incrementar}>+</button>
            </div>
            <button className={CountCss.btn2} onClick={() => onAdd(cantidad)}>Agregar</button>
        </div>
    )
}

export default ItemCount