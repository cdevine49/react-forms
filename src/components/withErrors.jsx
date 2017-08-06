import React from 'react';

const withErrors = Component => class extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: ''
    }
    this._hideErrors = this._hideErrors.bind(this);
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

  _hideErrors() {
    this.setState({ errorMessage: '' });
  }

  render() {
    const { hideErrors, displayErrors, validate, required, errors, ...props } = this.props;
    return <Component onBlur={this._displayErrors} onFocus={this._hideErrors} {...props} {...this.state} />;
  }
}

export default withErrors;