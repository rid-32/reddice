import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;

    function classes(type) {
      let classN = 'alert';

      switch (type) {
        case 'success':
          classN += ' alert-success';
          break;
        case 'error':
          classN += ' alert-danger';
          break;
      }

      return classN;
    }

    return (
      <div className={ classes(type) }>
        <button onClick={ this.onClick } className="close"><span>&times;</span></button>
        { text }
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default FlashMessage;
