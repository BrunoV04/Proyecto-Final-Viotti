import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/SingleItem/ItemDetail'
import Footer from './components/Footer/Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/detalle/:id' element={<ItemDetail />} />
            <Route path='/categoria/:category' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>Error 404</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
