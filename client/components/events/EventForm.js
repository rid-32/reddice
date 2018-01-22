import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit }>
        <h1>Create New Game Event</h1>

        <TextFieldGroup
          name="title"
          type="text"
          label="New Event"
          value={ this.state.title }
          onChange={ this.onChange }
          errors={ this.state.errors.title }
        />

        <button type="submit" onSubmit={ this.onSubmit } className="btn btn-primary">Create</button>
      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired,
};

export default EventForm;
