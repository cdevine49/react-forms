import React from 'react';
import Error from './error';
import Input from './input'

const Email = (props) => {
  return (
    <Input {...props} />
  )
}

Email.defaultProps = {
  labelText: 'Email',
  errors: [{_handle: (v) => v.match(/@/), message: "Not a valid email"}],
}

export default Email;
