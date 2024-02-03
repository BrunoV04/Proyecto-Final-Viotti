import FooterCss from './Footer.module.css'

const Footer = () => {
    return (

        <div className={FooterCss.pie}>
            <div className='container'>
                <hr />
                <p>Giro Online Copyright © 2024 - Todos los derechos reservados.</p>
            </div>
        </div>
    )
}

export default Footer