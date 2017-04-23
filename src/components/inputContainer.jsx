import React from 'react';
import Error from './error';

export default class InputContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: false,
      displayErrors: false
    }
  }

  componentDidMount() {
    this.props.validate({[this.props.id]: !this.props.required})
    this._handleErrors()
  }

  componentWillReceiveProps(nextProps) {
    !this.props.displayErrors && nextProps.displayErrors && this.setState({ displayErrors: true })
  }

  _handleErrors(value) {
    let errorMessage = false;
    if (this.props.required && !value) {
      errorMessage = "You can't leave this empty";
    }

    for (var i = 0; !errorMessage && i < this.props.errors.length; i++ ) {
      var error = this.props.errors.extra[i];
      if (error._handle(value)) {
        errorMessage = error.message;
      }
    }

    this.setState({ errorMessage });
    this.props.validate({[this.props.id]: !errorMessage})
  }

  _onChange(value) {
    this._handleErrors(value);
    this.props.onChange(value);
  }

  render() {
    const { type, length, containerClass, labelText, labelClass, id, placeholder, inputClass, value, underline } = this.props;
    const { displayErrors, errorMessage } = this.state;
    return (
      <div className={'input-container' + (containerClass ? (" " + containerClass) : "")}>
        <label htmlFor={id} className={labelClass}>{labelText}</label>
        <input
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          className={inputClass + ((errorMessage && displayErrors) ? ' error' : '')}
          onChange={ e => this._onChange(e.currentTarget.value) }
          onFocus={ () => this.setState({ displayErrors: false }) }
          onBlur={ () => this.setState({ displayErrors: true }) }
          />
        <Error display={displayErrors} errorMessage={errorMessage} />
        {underline && <p>{underline}</p>}
      </div>
    );
  }
}

InputContainer.defaultProps = {
  type: 'text',
  labelText: '',
  id: '',
  placeholder: '',
  labelClass: '',
  inputClass: '',
  containerClass: '',
  required: false,
  errors: {
    default: null,
    extra: [],
    match: false
  },
  onChange: () => {},
  validate: () => {}
}

// length undefined means slice equals string it's called on
