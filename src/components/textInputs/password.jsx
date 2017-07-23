import React from 'react';
import TextInput from '../textInput'

const Password = (props) => {
  return (
    <TextInput {...props} />
  )
}

Password.defaultProps = {
  label: 'Password',
  type: 'password',
  errors: [
    {
      _handle: (v) => v.length < 8, message: "Password must have at least 8 characters"
    },
    {
      _handle: (v) => v.length > 100, message: "Password must be shorter than 100 characters"
    },
    {
      _handle: (v) => !/\d/.test(v), message: "Password must include at least one number"
    },
    {
      _handle: (v) => !/[a-z]/.test(v), message: "Password must include at least one lowercase letter"
    },
    {
      _handle: (v) => !/[A-Z]/.test(v), message: "Password must include at least one uppercase letter"
    }
  ]
}

export default Password;
