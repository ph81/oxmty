import React from 'react';
import './Footer.css';


const Footer = () => {
    return (

        <footer>
             <div className="container-fluid credits">
           
           <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
               <div className="col-md-8 col-12 mt-5">
                   <p></p>
                   <p>Inspirado por <a href="https://oxigeno.cc" target="_blank" rel="noreferrer">Oxígeno México</a></p>
                   <div className="footer-copyright">
                       <p>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>.</p>
                       <p>Oxígeno MTY - Copyright © 2021.</p>
                   </div>
               </div>
           </div>
          
       </div>
        </footer>
       
    )
        
}

export default Footer

