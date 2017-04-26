import React from 'react';

const withErrors = Input => class extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
      displayErrors: false
    }
    this._hideErrors = this._hideErrors.bind(this);
    this._displayErrors = this._displayErrors.bind(this);
    this._handleErrors = this._handleErrors.bind(this);
  }

  componentDidMount() {
    // this.props.validate({[this.props.id]: !this.props.required});
    this._handleErrors(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    !this.props.displayErrors && nextProps.displayErrors && this.setState({ displayErrors: true })
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
    // this.props.validate({[this.props.id]: !errorMessage})
  }

  _displayErrors() {
    this.setState({ displayErrors: true });
  }

  _hideErrors() {
    this.setState({ displayErrors: false });
  }

  render() {
    return <Input handleErrors={this._handleErrors} onBlur={this._displayErrors} onFocus={this._hideErrors} {...this.props} {...this.state} />;
  }
}

export default withErrors;