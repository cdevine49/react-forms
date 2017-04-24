import React from 'react';
import Error from './error';
import { setClassName } from '../helpers'

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: false,
      displayErrors: false
    }
    this._onChange = this._onChange.bind(this);
    this._hideErrors = this._hideErrors.bind(this);
    this._displayErrors = this._displayErrors.bind(this);
  }

  componentDidMount() {
    this.props.validate({[this.props.id]: !this.props.required});
    this._handleErrors(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    !this.props.displayErrors && nextProps.displayErrors && this.setState({ displayErrors: true })
  }

  _handleErrors(value) {
    let errorMessage = false;
    if (this.props.required && !value) {
      errorMessage = "You can't leave this empty";
    } else if (value) {
      for (var i = 0; i < this.props.errors.length; i++ ) {
        var error = this.props.errors[i];
        if (error._handle(value)) {
          errorMessage = error.message;
        }
      }
    }


    this.setState({ errorMessage });
    this.props.validate({[this.props.id]: !errorMessage})
  }

  _onChange(e) {
    const value = e.currentTarget.value;
    this._handleErrors(value);
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
            ...props
          } = this.props;
    const { displayErrors, errorMessage } = this.state;
    return (
      <div className={setClassName('input-container', containerClass)}>
        <label htmlFor={id} className={labelClass}>{labelText}</label>
        <input
          id={id}
          type={type}
          className={inputClass + ((errorMessage && displayErrors) ? ' error' : '')}
          onChange={ this._onChange }
          onFocus={ this._hideErrors }
          onBlur={ this._displayErrors }
          {...props}
          />
        <Error { ...this.state } />
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

// length undefined means slice equals string it's called on
