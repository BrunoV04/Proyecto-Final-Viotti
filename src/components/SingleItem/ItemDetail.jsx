import { useState, useEffect } from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { db } from '../../services/firebase/firebase'
import { getDoc, doc } from "firebase/firestore"

const ItemDetail = () => {
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    useEffect(() => {
        const productDoc = doc(db, 'base', id)
        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields }
                setProducto(productAdapted)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [id])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <div className="container">
                <ItemDetailContainer {...producto} />
            </div>
        </>
    )
}

export default ItemDetail