import React from 'react';
import TextField from '../textField'

const Email = (props) => {
  return (
    <TextField {...props} />
  )
}

Email.defaultProps = {
  label: 'Email',
  errors: [{_handle: (v) => !v.match(/@/), message: "Not a valid email"}]
}

export default Email;
