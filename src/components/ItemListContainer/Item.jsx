import itemCss from './Item.module.css'

import { Link } from 'react-router-dom'
const Item = ({ id, name, price, detail, amount, discount, img }) => {
  return (
    <>
      <div className={itemCss.card}>
        <div className="card">
          <Link to={`/detalle/${id}`}><img src={img} className="card-img-top" alt="..." /></Link>
          <div className="card-body">
            <Link to={`/detalle/${id}`}><h5 className={itemCss.title}>{name}</h5></Link>
            <p className={itemCss.discount}>{discount}</p>
            <p className={itemCss.detail}>{detail}</p>
            <h3 className={itemCss.price}>${price}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item