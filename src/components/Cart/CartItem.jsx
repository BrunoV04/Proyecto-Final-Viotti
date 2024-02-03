import CartItemCss from './CartItem.module.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext)
  const subtotal = price * quantity
  return (<>
    <div className={CartItemCss.card}>
      <div className="card">
        <h4 className={CartItemCss.title}>{name}</h4>
        <hr className={CartItemCss.hr} />
        <div className="card-body">
          <div className={CartItemCss.body}>
            <h6 className={CartItemCss.text}>Precio por unidad: <strong>${price}</strong></h6>
            <h6 className={CartItemCss.text}>x{quantity} unid.</h6>
            <h6 className={CartItemCss.text}>Subtotal: <strong>${subtotal}</strong></h6>
            <a href="#" className={CartItemCss.btn2} onClick={() => removeItem(id)}>Borrar producto</a>
          </div></div>
      </div></div>
  </>)
}

export default CartItem