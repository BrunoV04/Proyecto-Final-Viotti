import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import cartRender from './assets/cartrender.svg'
import CartCss from './Cart.module.css'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="container">
                <div className={CartCss.card2}>
                    <img src={cartRender} className={CartCss.cartRender} alt="Carrito vacio" />
                    <h3 className={CartCss.title}>No hay productos en en el carrito</h3>
                    <Link to='/' className={CartCss.check}>Ir al inicio</Link>
                </div></div>
        )
    }
    return (
        <div className='container'>
            {cart.map(pro => <CartItem key={pro.id} {...pro} />)}
            <div className={CartCss.card}>
                <h3 className={CartCss.h3}>Total  a pagar: ${total}</h3>
                <Link className={CartCss.check} to='/checkout'>Checkout</Link>
                <button className={CartCss.limpiar} onClick={() => clearCart()}>Limpiar Carrito</button>
            </div></div>
    )
}

export default Cart