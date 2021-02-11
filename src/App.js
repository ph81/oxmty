import React, { Component } from 'react';
import Header from './components/Header'
import LocationCard from './components/LocationCard'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

//importing icons
library.add(fab, faMapMarkerAlt, faPhone)

//airtable
const apiKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;
var base = url+apiKey;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    fetch(base)
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ locations: data.records });
    }).catch(err => {
      // Error :(
    });
  }


  render() {
    return (

      <div className="container-fluid px-0">
        <Header />
  
        <div className="container mt-5">
          <div className="row align-items-center">
          
              <div className="card-deck">
                {this.state.locations.map(location => <LocationCard {...location.fields} /> )}
              </div>
        
          </div>
          <p className="text-center">Más información en <a href="">Oxígeno SPGG</a></p>
          
        
        </div>
         

        <Footer />

      </div>

    
    );
  }
}

export default App;