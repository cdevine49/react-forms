import React from 'react';
import { setClassName } from '../helpers'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      displayErrors: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.mapChildren = this.mapChildren.bind(this);
  }

  renderChildren() {
    return React.Children.map(this.props.children, this.mapChildren)
  }

  mapChildren(child) {
    if (child.props.required || (child.props.errors && child.props.errors.length > 0)) {
      return React.cloneElement(child, { displayErrors: this.state.displayErrors });
    } else {
      return child;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({displayErrors: true})
    this.props.onSubmit()
  }

  validate() {

  }

  render() {
    const { className, defaultStyle, onSubmit, ...props } = this.props;
    return (
      <form
        className={(defaultStyle ? setClassName('react-form', className) : className)}
        onSubmit={this.handleSubmit}
        { ...props }>
        {this.renderChildren()}
      </form>
    );
  }
}

Form.defaultProps = {
  noValidate: true,
  defaultStyle: true,
  onSubmit: () => {}
}
