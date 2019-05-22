import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, () => {
    this.props.history.push('/'); // Navigate after submit
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="brand"
            component={this.renderField}
          />
          <Field
            className="form-control"
            label="Model"
            name="model"
            component={this.renderField}
          />
          <Field
            className="form-control"
            label="Owner"
            name="owner"
            component={this.renderField}
          />
          <Field
            className="form-control"
            label="Plate"
            name="plate"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Create Car
          </button>
        </form>
      </div>
    );
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default reduxForm({ form: 'newCarForm' })(
 connect(mapStateToProps, { createCar })(CarsNew)
);
