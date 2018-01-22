import React, { Component } from 'react';
import { connect } from 'react-redux';

import EventForm from './EventForm';

import { createEvent } from '../../actions/eventActions';

class NewEventPage extends Component {
  render() {
    return (
      <div>
        <EventForm createEvent={ this.props.createEvent }/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createEvent: event => {
      dispatch(createEvent(event));
    },
  };
}

export default connect(null, mapDispatchToProps)(NewEventPage);
