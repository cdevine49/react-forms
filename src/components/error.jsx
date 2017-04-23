import React from 'react';

const Error = ({display, errorMessage}) => {
  if (display && errorMessage) {
    return ( <span className='error-message'>{errorMessage}</span> );
  } else {
    return null;
  }
}

export default Error;
