import navbar from './NavBar.module.css'
import Boton from './Boton/Boton.jsx'
import logo from './assets/logotipo.svg'
import icono from './assets/menu.svg'
import CartWidget from './CartWidget/CartWidget.jsx'
import SubMenu from './SubMenu/SubMenu.jsx'
import Buscador from './Buscador/Buscador.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    const [ocultoSubMenu, mostrarSubMenu] = useState(false)

    const mostrarCategoria = () => {
        mostrarSubMenu(!ocultoSubMenu);
    };

    return (

        <>
            <div className={navbar.top}>
                <div className="container">
                    <div className={navbar.base}>
                        <Link to='/'><img src={logo} className={navbar.logotipo} alt="Logotipo Supermercados Giro" /></Link>
                        <Boton ico={icono} onClick={mostrarCategoria} nom={'Categoría'} />
                        <Buscador />
                        <CartWidget />
                    </div>
                </div>
            </div>
            {ocultoSubMenu && <SubMenu />}
        </>
    )
}

export default NavBar