import { Link } from "react-router-dom"
import OrderCss from "./OrderForm.module.css"
import { useState } from "react"
import Alert from '../Alert/Alert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderForm = (props) => {
const [form, setForm] = useState({
    nombre: '',
    ciudad: '',
    direccion: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };
  
  const handleConfirmarCompra = () => {
    if (form.nombre && form.ciudad && form.direccion && form.telefono) {
      // Todos los campos están completos, continuar con la confirmación de compra
      props.create(form);
      toast.success(`Gracias por su compra ${form.nombre}, será informado por el envio al teléfono ${form.telefono}.`);
    } else {
      // Al menos uno de los campos está vacío, mostrar un mensaje de error
      toast.error(`Por favor complete todos los campos para confirmar la compra.`);
    }
  };


    return (
        <>
            <div className="container">
                <div className={OrderCss.card}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nombre del comprador</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre y Apellido"  value={form.nombre}
                onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Ciudad</label>
                    <input type="text" className="form-control" id="ciudad" placeholder="Santa Fe Capital" value={form.ciudad}
                onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="direccion" placeholder="Hipolito Irigoyen 1675" value={form.direccion}
                onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Teléfono de contacto</label>
                    <input type="number" className="form-control" id="telefono" placeholder="34240000" value={form.telefono}
                onChange={handleChange}/>
                </div>
                <Link className={OrderCss.check}  onClick={handleConfirmarCompra} to='#'>Confirmar compra</Link>
            </div></div>
            <Alert/>
            
        </>
    )
}

export default OrderForm