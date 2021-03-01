import React from 'react';
import './Footer.css';


const Footer = () => {
    return (

        <footer>
             <div className="container-fluid credits">
           
           <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
               <div className="col-md-8 col-12 mt-5">
                   <p>Contacto: info@.dotnet</p>
                   <p>Inspirado por <a href="https://oxigeno.cc" target="_blank" rel="noreferrer">Oxígeno México</a></p>
                   <div className="footer-copyright">
                       Oxígeno MTY - Copyright © 2021.
                   </div>
               </div>
           </div>
          
       </div>
        </footer>
       
    )
        
}

export default Footer