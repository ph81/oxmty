import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
    return (
       
        
            <div className="container-fluid px-0">
                <div className="title">
                    <h1 className="display-4">Oxígeno en Monterrey</h1>
                    <div className="subtitle">
                        <p className="lead">Listado de proveedores de oxígeno (tanques y/o concentradores) en Monterrey y área metropolitana.</p>
                        <p className="social">Compartir en 
                            <a   href="https://www.facebook.com/sharer/sharer.php?u=https://oxigenomty.cc" target="_blank" rel="noreferrer" title="Compartir en Facebook"><FontAwesomeIcon icon={["fab", "facebook"]} className="social-icon"/></a>
                            <a   href="https://api.whatsapp.com/send?text=https://oxigenomty.cc" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={["fab", "whatsapp"]} /></a>
                            <a   href="https://twitter.com/intent/tweet?text=Oxígeno MTY&amp;url=https://oxigenomty.cc"  target="_blank" rel="noreferrer" title="Compartir en Twitter"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                        </p>
                        <p className="warning">
                            <a href="https://www.forbes.com.mx/noticias-consejos-para-prevenir-fraudes-en-venta-o-renta-de-tanques-de-oxigeno/" target="_blank" rel="noreferrer">
                                Consejos para prevenir fraudes en la venta y renta de oxígeno</a>
                        </p>
                      
                   
                    </div>
                    

                </div>
                <div className="jumbotron jumbotron-fluid"></div>
            </div>
        

    )
}

export default Header