import React from 'react';
import TextInput from '../textInput'

const Email = (props) => {
  return (
    <TextInput {...props} />
  )
}

Email.defaultProps = {
  label: 'Email',
  errors: [{_handle: (v) => !v.match(/@/), message: "Not a valid email"}]
}

export default Email;
