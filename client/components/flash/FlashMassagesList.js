import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessagesAction';

class FlashMassagesList extends Component {
  render() {
    const messages = this.props.messages.map((message) => (
      <FlashMessage key={ message.id } message={ message } deleteFlashMessage={ this.props.deleteFlashMessage } />
    ));
    return (
      <div>{ messages }</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteFlashMessage: id => dispatch(deleteFlashMessage(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashMassagesList);
