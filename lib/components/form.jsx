import React from 'react';
import Form from '../elements/form';
import setClassName from '../helpers/setClassName'
import styled from 'styled-components';

export default class FormValidator extends React.Component {
  constructor() {
    super();
    this.state = {
      displayErrors: false,
      submittable: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fields = this.fields.bind(this);
    this.mapChildren = this.mapChildren.bind(this);
    this.validate = this.validate.bind(this);
  }

  fields() {
    return React.Children.map(this.props.children, this.mapChildren)
  }

  mapChildren(child, idx) {
    if (child.props.required || (child.props.errors && child.props.errors.length > 0)) {
      return React.cloneElement(child, { displayErrors: this.state.displayErrors, isValid: this.validate(idx) });
    } else {
      return child;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.submittable.every((field) => field)) {
      this.props.onSubmit()
    } else {
      this.setState({displayErrors: true});
    }
  }

  validate(idx) {
    var that = this;
    return function(bool) {
      that.setState(prevState => {
        const submittable = that.state.submittable.slice();
        submittable[idx] = bool;
        console.log(submittable);
        return { submittable };
      });
    }
  }

  render() {
    const { onSubmit, ...props } = this.props;
    return (
      <Form
        onSubmit={this.handleSubmit}
        { ...props }>
        {this.fields()}
      </Form>
    );
  }
}

FormValidator.defaultProps = {
  noValidate: true
}
