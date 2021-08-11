import React from 'react';
import './LocationCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LocationCard = (props) => {
    return (

        

        <div className="col-sm-4">
        <div className="card mt-1 mb-4 mx-auto">
       
            <div className="card-content">
            
                <h5 className="card-title">{props.empresa}</h5>
                <p className="phone"> <FontAwesomeIcon icon="phone"/> {props.tel}</p>
                <p>{props.horario && <small className="text-muted">Horario: {props.horario}</small> }</p>
               
                    
                
                   
              
                    
               
                <p>
                {props.recarga && <span aria-label="Recarga">Recarga: {props.recarga}</span>}
                {props.venta && <span>Venta: {props.venta}</span>}
                {props.renta && <span>Renta: {props.renta}</span>}
           
                </p>
                <p >
                    <span>{props.whatsapp && <a href={props.whatsapp} alt="Whatsapp" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'whatsapp']} className="wa" /></a>}</span>
                    <span>{props.dir && <a href={props.dir} alt="Dirección" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="map-marker-alt" className="map" /></a>}</span>
                    <span>{props.web && <a href={props.web} alt="Web/Facebook" target="_blank" rel="noreferrer">Web/Facebook</a>}</span>
                   
                    
                </p>
                
            

            </div>                                   
    
        </div>
  
        </div>
    )
}

  export default LocationCard;