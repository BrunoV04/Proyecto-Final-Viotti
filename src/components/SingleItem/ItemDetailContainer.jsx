import itemDetailCss from './ItemDetailContainer.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Alert from '../Alert/Alert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = ({ id, name, price, detail, stock, discount, img, detailMore }) => {
  const [quantityAdd, setQuantityAdd] = useState(0)
  const { addItem } = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdd(quantity)


    const item = {
      id, name, price
    }

    addItem(item, quantity)
    toast.success(`${quantity} ${name} agregado(s) al carrito`)
  }

  return (
    <>
      <div className={itemDetailCss.card}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img} className="rounded-start" alt="..." style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className={itemDetailCss.top}>
                  <h5 className={itemDetailCss.title}>{name}</h5>
                  <p className={itemDetailCss.discount}>{discount}</p>
                </div>
                <hr />
                <p className={itemDetailCss.detail}>{detail}</p>
                <h3 className={itemDetailCss.price}>${price}</h3>
                {
                  quantityAdd > 0 ? (
                    <>
                      <Link to='/' className={itemDetailCss.btn1}>Seguir comprando</Link>
                      <Link to='/cart' className={itemDetailCss.btn2}>Finalizar compra</Link>
                    </>) :
                    (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
                <hr />
                <h6 className={itemDetailCss.title}>Detalles</h6>
                <p className={itemDetailCss.detail}>{detailMore}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Alert />
    </>
  )
}

export default ItemDetailContainer 