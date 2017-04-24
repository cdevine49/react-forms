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
  id: '',
  placeholder: '',
  labelClass: '',
  inputClass: '',
  containerClass: '',
  required: false,
  errors: {
    default: null,
    extra: [],
    match: false
  },
  validate: () => {},
  regex: '/@/'
}

export default Email;
