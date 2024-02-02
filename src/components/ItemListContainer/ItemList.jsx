import { useState, useEffect } from "react"
import Item from './Item'
import { useParams } from "react-router-dom"
import Loading from '../Loading/Loading'
import { db } from "../../services/firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemList = () => {
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState([])
    const { category } = useParams()

    useEffect(() => {
        const productsCo = category ? query(collection(db, 'base'), where('category', "==", category)) : collection(db, 'base')
        getDocs(productsCo)
            .then(querySnapshot => {
                const products = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

         setProducto(products)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [category])

    if (loading) {
        return <Loading />
    }

    return (
        producto.slice(0, 4).map(pro => {
            return (
                <Item key={pro.id} {...pro} />
            )
        }))
}

export default ItemList