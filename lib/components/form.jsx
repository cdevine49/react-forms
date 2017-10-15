import React from 'react';
import StyledForm from '../elements/form';
import setClassName from '../helpers/setClassName'
import styled from 'styled-components';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      displayErrors: false,
      submittable: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.mapChildren = this.mapChildren.bind(this);
    this.validate = this.validate.bind(this);
  }

  renderChildren() {
    return React.Children.map(this.props.children, this.mapChildren)
  }

  mapChildren(child, idx) {
    if (child.props.required || (child.props.errors && child.props.errors.length > 0)) {
      return React.cloneElement(child, { displayErrors: this.state.displayErrors, validate: this.validate(idx) });
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
      const submittable = that.state.submittable;
      submittable[idx] = bool
      that.setState(submittable)
    }
  }

  render() {
    const { onSubmit, ...props } = this.props;
    // const s = styled;
    // debugger
    return (
      <StyledForm
        onSubmit={this.handleSubmit}
        { ...props }>
        {this.renderChildren()}
      </StyledForm>
    );
  }
}

Form.defaultProps = {
  noValidate: true,
  onSubmit: function(){}
}
