
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import LocationCard from './components/LocationCard'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

//importing icons
library.add(fab, faMapMarkerAlt, faPhone)

  //testing variables
  //console.log(process.env.REACT_APP_API_KEY);
  //console.log(process.env.REACT_APP_API_URL);
  const base = process.env.REACT_APP_API_URL + process.env.REACT_APP_API_KEY;
  

const App = () => {

  const[locations, setLocations] = useState([]); 
  //const [hasError, setErrors] = useState(false);
  useEffect(() => {
    fetch(base)
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.records);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


 
    return (
      <div className="container-fluid px-0">
        <Header />
  
        <div className="container mt-5">
          <div className="row align-items-center">
          
              <div className="card-deck mx-auto">
                {locations.map(location => <LocationCard {...location.fields} /> )}
              </div>
        
          </div>
          <p className="text-center">Más información en <a href="https://oxigeno.sanpedro.gob.mx/" target="_blank" rel="noreferrer">Oxígeno SPGG</a></p>
          
        
        </div>
         

        <Footer />

      </div>
    )


}  


export default App;
