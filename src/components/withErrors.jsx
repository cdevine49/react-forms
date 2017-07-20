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
    this.props.validate && this.props.validate(false);
  }

  componentWillReceiveProps(nextProps) {
    !this.props.displayErrors && nextProps.displayErrors && this.setState({ displayErrors: true })
  }

  _displayErrors() {
    const { errors, required, value } = this.props;
    let errorMessage = false;
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

    this.props.validate && this.props.validate(!errorMessage);
    this.setState({ errorMessage });
  }

  _hideErrors() {
    this.setState({ errorMessage: false });
    this.props.displayErrors && this.props.hideErrors();
  }

  render() {
    const { hideErrors, displayErrors, validate, required, errors, ...props } = this.props;
    return <Component onBlur={this._displayErrors} onFocus={this._hideErrors} {...props} {...this.state} />;
  }
}

export default withErrors;

withErrors.defaultProps = {
  validate: function(){}
}