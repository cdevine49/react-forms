import React from 'react';
import Error from './error';
import TextInput from './textInput'

const Email = (props) => {
  return (
    <TextInput {...props} />
  )
}

Email.defaultProps = {
  labelText: 'Email',
  errors: [{_handle: (v) => !v.match(/@/), message: "Not a valid email"}]
}

export default Email;
