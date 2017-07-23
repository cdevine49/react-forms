import React from 'react';
import TextInput from '../textInput'

const Confirmation = ({match, message, ...props}) => {
  return (
    <TextInput {...props} errors={[{ _handle: (v) => v !== match, message: message }]} />
  )
}

Confirmation.defaultProps = {
  label: 'Confirm',
  message: "Must match"
}

export default Confirmation;
