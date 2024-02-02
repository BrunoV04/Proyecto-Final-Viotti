import ico from './assets/carrito.svg'
import { useContext } from "react"
import carrito from './CartWidget.module.css'
import { CartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
  
    const {totalQuantity} = useContext(CartContext)

    return(
      
      <Link to='/cart'><div className={carrito.modulo}>
      <div className={carrito.carrito}>
        <div className={carrito.carro}>
            <img src={ico} alt="Carrito" className={carrito.ico} /><p className={carrito.num}>{totalQuantity}</p>
            </div>
            <p className={carrito.text}>Carrito</p>
          </div>
          </div>
          </Link>
        
        
    )
}

export default CartWidget