import React from 'react';
import { setClassName } from '../helpers'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      displayErrors: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit() {
    this.setState({displayErrors: true})
    this.props.onSubmit()
  }

  render() {
    const { className, defaultStyle, onSubmit, ...props } = this.props;
    return (
      <form
        className={(defaultStyle ? setClassName('react-form', className) : className)}
        onSubmit={() => this.handleSubmit()}
        { ...props }>
        {this.props.children}
      </form>
    );
  }
}

Form.defaultProps = {
  noValidate: true,
  defaultStyle: true
}
