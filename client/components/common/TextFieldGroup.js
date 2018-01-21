import React, { Component } from 'react';
import PropTypes from 'prop-types';

function createHelpBlock(str) {
  return (
    <span className="has-error">{ str }</span>
  );
}

function formGroupClasses(err, errorName) {
  let classN = 'form-group';
  if (err[errorName]) {
    classN += ' has-error';
  }

  return classN;
}

class TextFieldGroup extends Component {
  render() {
    const labelId = this.props.name + 'Id';

    return (
      <div className={ formGroupClasses(this.props.errors, this.props.name) }>
        <label htmlFor={ labelId } className="control-label">{ this.props.label }</label>
        <input
          id={ labelId }
          type={ this.props.type }
          name={ this.props.name }
          value={ this.props.value }
          className="form-control"
          onChange={ this.props.onChange }
          onBlur={ this.props.checkUserExists }
        />
        { this.props.errors && createHelpBlock(this.props.errors[this.props.name]) }
      </div>
    );
  }
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func,
  errors: PropTypes.object,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
