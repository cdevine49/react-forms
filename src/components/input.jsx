import React from 'react';
import withErrors from './withErrors';
import Error from './error';
import { setClassName } from '../helpers';

class Input extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  _onChange(e) {
    const value = e.currentTarget.value;
    this.props.handleErrors(value);
    this.props.onChange(value);
  }

  _displayErrors() {
    this.setState({ displayErrors: true });
  }

  _hideErrors() {
    this.setState({ displayErrors: false });
  }

  render() {
    const { containerClass,
            labelText, labelClass,
            id, type, inputClass,
            underline,
            validate, required, errors, onChange,
            errorMessage, displayErrors, _displayErrors, _hideErrors, handleErrors,
            ...props
          } = this.props;
    return (
      <div className={setClassName('input-container', containerClass)}>
        <label htmlFor={id} className={labelClass}>{labelText}</label>
        <input
          id={id}
          type={type}
          className={setClassName(inputClass, (errorMessage && displayErrors && 'error'))}
          onChange={ this._onChange }
          onFocus={ _hideErrors }
          onBlur={ _displayErrors }
          {...props}
          />
        <Error errorMessage={errorMessage} displayErrors={displayErrors} />
        {underline && <p>{underline}</p>}
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  labelText: '',
  id: '',
  value: '',
  placeholder: '',
  labelClass: '',
  inputClass: '',
  containerClass: '',
  required: false,
  errors: [],
  onChange: () => {},
  validate: () => {}
}

export default withErrors(Input);
