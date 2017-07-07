import React from 'react';
import Error from './error';
import Container from './container'

const Confirmation = ({match, message, ...props}) => {
  return (
    <Container {...props} errors={[{_handle: (v) => v !== match, message: message}]} />
  )
}

Confirmation.defaultProps = {
  labelText: 'Confirm'
}

export default Confirmation;
