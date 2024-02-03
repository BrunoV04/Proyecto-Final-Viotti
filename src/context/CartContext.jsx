import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, settotalQuantity] = useState(0)
    const [total, setTotalToPay] = useState(0)

    useEffect(() => {
        itemTotalQuantity()
        totalToPay()
    }, [cart])


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }


    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const itemTotalQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        settotalQuantity(count)
    }

    const totalToPay = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })

        setTotalToPay(total)
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}