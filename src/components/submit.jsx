import React from 'react';
import { setClassName } from '../helpers'

const Submit = ({...props}) => {

  return (
    <input
      type='submit'
      {...props}
      />
  )
}

Submit.defaultProps = {
  className: 'submit',
  value: 'Submit'
}

export default Submit
