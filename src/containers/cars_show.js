import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchCar, deleteCar } from '../actions/index';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car.id)
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

  return (
    <div>
      <div className="car-show">
        <Link to="/">
          {"<"} Back
        </Link>

        <h3>{this.props.car.brand} - {this.props.car.model}</h3>
        <p>{this.props.car.owner}</p>
        <p>{this.props.car.plate}</p>

        <button className="btn btn-danger" type="submit" onClick={this.handleClick}>
          Delete
        </button>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(c => c.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
