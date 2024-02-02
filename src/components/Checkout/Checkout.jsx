import OrderForm from "./OrderForm"
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { db } from "../../services/firebase/firebase"
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore"
import Alert from '../Alert/Alert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext)
    const createOrder = async (formData) => {
        try{
        const objOrder = {
            buyer: {formData},
            items: cart,
            total: total
        }

        const batch = writeBatch(db)
        const outOfStock = []
        const ids = cart.map(prod => prod.id)


        const productsCollection = query(collection(db, 'base'), where(documentId(), 'in', ids))


        const querySnapshot = await getDocs(productsCollection)
        const { docs } = querySnapshot

        docs.forEach(doc => {
            const fields = doc.data()
            const stockDb = fields.stock

            const productsAddedToCart = cart.find(pro => pro.id === doc.id)
            const prodQuantity = productsAddedToCart.quantity

            if (stockDb >= prodQuantity) {
             batch.update(doc.ref, {stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({id: doc.id, ...fields})
            }
        })
if(outOfStock.length === 0){
    batch.commit()
    const orderCollection = collection(db, 'orders')
    const {id} = await addDoc(orderCollection, objOrder)
    clearCart()
    
}else{
    outOfStock.forEach(product => {
        toast.error(`El producto "${product.name}" no tiene stock disponible.`);
      });
}
} catch (error) {
    console.log(error)
} 
    }

    return (
        <>
        <OrderForm create={createOrder} />
        <Alert/>
        </>
    )
}

export default Checkout