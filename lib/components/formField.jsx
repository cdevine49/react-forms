import React from 'react';

export default class FormField extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: ''
    }
    this.displayErrors = this.displayErrors.bind(this);
    this._displayErrors = this._displayErrors.bind(this);
    this._hideErrors = this._hideErrors.bind(this);
  }

  componentDidMount() {
    this.props.validate && this.props.validate(!this._getErrorMessage());
  }

  componentWillReceiveProps(nextProps) {
    const { displayErrors, value } = this.props;
    const { displayErrors: nextDisplayErrors, value: nextValue } = nextProps;
    ((!displayErrors && nextDisplayErrors) || (value !== nextValue && this.state.errorMessage)) && this._displayErrors(nextValue);
  }

  _getErrorMessage(value) {
    const { errors, required } = this.props;
    let errorMessage = '';
    if (required && !value) {
      errorMessage = "You can't leave this empty";
    } else if (errors) {
      for (var i = 0; i < errors.length; i++ ) {
        var error = errors[i];
        if (error._handle(value)) {
          errorMessage = error.message;
          break;
        }
      }
    }

    return errorMessage;
  }

  displayErrors() {
    this._displayErrors(this.props.value);
  }

  _displayErrors(value) {
    const errorMessage = this._getErrorMessage(value);
    this.props.validate && this.props.validate(!errorMessage);
    this.setState({ errorMessage });
  }

  _hideErrors() {
    this.setState({ errorMessage: '' });
  }

  render() {
    const { children } = this.props;
    const { errorMessage } = this.state;
    return (
      children(errorMessage, this.displayErrors, this._hideErrors)
    );
  }
}