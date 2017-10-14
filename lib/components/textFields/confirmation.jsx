import React from 'react';
import TextField from '../textField'

const Confirmation = ({match, message, ...props}) => {
  return (
    <TextField {...props} errors={[{ _handle: (v) => v !== match, message: message }]} />
  )
}

Confirmation.defaultProps = {
  label: 'Confirm',
  message: "Must match"
}

export default Confirmation;
