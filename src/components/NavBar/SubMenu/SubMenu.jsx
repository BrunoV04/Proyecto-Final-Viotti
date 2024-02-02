import SubMenuCss from './SubMenu.module.css'
import Boton from './Boton/Boton'
import almacen from '../assets/ico/almacen.svg'
import desayunos from '../assets/ico/desayunos.svg'
import frescos from '../assets/ico/frescos.svg'
import frutas from '../assets/ico/frutas.svg'
import bebidas from '../assets/ico/bebidas.svg'
import congelados from '../assets/ico/congelados.svg'
import limpieza from '../assets/ico/limpieza.svg'

const SubMenu = () => {
    return (

        <>
            <div className={SubMenuCss.sub}>
                <div className="container">
                    <div className={SubMenuCss.baseDos}>
                        <Boton ico={almacen} link={'/categoria/almacen'} nom={'Almacen'} />
                        <Boton ico={desayunos} link={'/categoria/desayuno'} nom={'Desayunos'} />
                        <Boton ico={frescos} link={'/categoria/frescos'} nom={'Frescos'} />
                        <Boton ico={frutas} link={'/categoria/fruta-y-verdura'} nom={'Frutas y Verduras'} />
                        <Boton ico={bebidas} link={'/categoria/bebidas'} nom={'Bebidas'} />
                        <Boton ico={congelados} link={'/categoria/congelados'} nom={'Congelados'} />
                        <Boton ico={limpieza} link={'/categoria/limpieza'} nom={'Limpieza'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubMenu