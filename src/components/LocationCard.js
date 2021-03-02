import React from 'react';
import './LocationCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LocationCard = ({empresa, tel, whatsapp, horario, dir, recarga, venta, renta, web}) => {
    return (

        

        <div className="col-sm-4">
        <div className="card mt-1 mb-4">
       
            <div className="card-content">
            
                <h5 className="card-title">{empresa}</h5>
                <p className="phone"> <FontAwesomeIcon icon="phone"/> {tel}</p>
                <p>{horario && <small className="text-muted">Horario: {horario}</small> }</p>
               
                    
                
                   
              
                    
               
                <p>
                {recarga && <span aria-label="Recarga">Recarga: {recarga}</span>}
                {venta && <span>Venta: {venta}</span>}
                {renta && <span>Renta: {renta}</span>}
           
                </p>
                <p >
                    <span>{whatsapp && <a href={whatsapp} alt="Whatsapp" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'whatsapp']} className="wa" /></a>}</span>
                    <span>{dir && <a href={dir} alt="Dirección" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="map-marker-alt" className="map" /></a>}</span>
                    <span>{web && <a href={web} alt="Web/Facebook" target="_blank" rel="noreferrer">Web/Facebook</a>}</span>
                   
                    
                </p>
                
            

            </div>                                   
    
        </div>
  
        </div>
    )
}

  export default LocationCard;