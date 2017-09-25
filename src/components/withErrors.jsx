import React from 'react';

export default class FormField extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: ''
    }
    this._displayErrors = this._displayErrors.bind(this);
  }

  componentDidMount() {
    this.props.validate && this.props.validate(!this._getErrorMessage());
  }

  componentWillReceiveProps(nextProps) {
    !this.props.displayErrors && nextProps.displayErrors && this._displayErrors();
  }

  _getErrorMessage() {
    const { errors, required, value } = this.props;
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

  _displayErrors() {
    const errorMessage = this._getErrorMessage();
    this.props.validate && this.props.validate(!errorMessage);
    this.setState({ errorMessage });
  }

  render() {
    const { children } = this.props;
    const { errorMessage } = this.state;
    return (
      children(errorMessage, this._displayErrors)
    );
  }
}