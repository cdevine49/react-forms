import React from 'react';

const withErrors = Component => class extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
      displayErrors: false
    }
    this._hideErrors = this._hideErrors.bind(this);
    this._displayErrors = this._displayErrors.bind(this);
    this._handleErrors = this._handleErrors.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.required && this.props.validate(false);
  }

  componentWillReceiveProps(nextProps) {
    !this.props.displayErrors && nextProps.displayErrors && this.setState({ displayErrors: true })
  }

  onChange(e) {
    const value = e.currentTarget.value;
    this._handleErrors(value);
    this.props.onChange(value);
  }

  _handleErrors(value) {
    let errorMessage = false;
    if (this.props.required && !value) {
      errorMessage = "You can't leave this empty";
    } else if (value && this.props.errors) {
      for (var i = 0; i < this.props.errors.length; i++ ) {
        var error = this.props.errors[i];
        if (error._handle(value)) {
          errorMessage = error.message;
        }
      }
    }

    this.setState({ errorMessage });
    this.props.validate(!errorMessage);
  }

  _displayErrors() {
    this.setState({ displayErrors: true });
  }

  _hideErrors() {
    this.setState({ displayErrors: false });
    this.props.displayErrors && this.props.hideErrors();
  }

  render() {
    const { hideErrors, handleErrors, ...props } = this.props;
    return <Component onBlur={this._displayErrors} onFocus={this._hideErrors} {...props} {...this.state} onChange={this.onChange} />;
  }
}

export default withErrors;