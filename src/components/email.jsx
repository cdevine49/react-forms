import React from 'react';
import Error from './error';
import Container from './container'

const Email = (props) => {
  return (
    <Container {...props} />
  )
}

Email.defaultProps = {
  labelText: 'Email',
  errors: [{_handle: (v) => !v.match(/@/), message: "Not a valid email"}]
}

export default Email;
