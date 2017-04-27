import React from 'react';

const Error = ({errorMessage}) => {
  if (errorMessage) {
    return ( <span className='error-message'>{errorMessage}</span> );
  } else {
    return null;
  }
}

export default Error;
