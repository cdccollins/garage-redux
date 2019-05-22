import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

   renderCars() {
     return this.props.cars.map((car) => {
       return (
         <div>
           <Link to={`/cars/${car.id}`} key={car.id}>
             <div className="car-item">
               <h3>{car.brand} - {car.model}</h3>
               <p>Owner: {car.owner}</p>
             </div>
           </Link>
         </div>
       );
     });
   }

   render() {
     return (
       <div className="car-index">
         <div className="garage-details">
           <h3>{this.props.garage}</h3>
             <Link className="btn btn-primary btn-cta" to="/cars/new">
                Add car
             </Link>
           </div>
          <div className="car-list">
           {this.renderCars()}
          </div>
       </div>
     );
   }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ fetchCars }, dispatch);
}

function mapStateToProps(state) {
 return { cars: state.cars,
          garage: state.garage
         };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
