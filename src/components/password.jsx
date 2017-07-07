import React from 'react';
import Error from './error';
import Container from './container'

const Password = (props) => {
  return (
    <Container {...props} />
  )
}

Password.defaultProps = {
  labelText: 'Password',
  type: 'password',
  errors: [
    {
      _handle: (v) => v.length < 8, message: "Password must have at least 8 characters",
    },
    {
      _handle: (v) => v.length > 100, message: "Password must be shorter than 100 characters",
    }
  ]
}

export default Password;
