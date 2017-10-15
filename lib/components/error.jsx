import React from 'react';
import StyledError from '../elements/error'

const Error = ({ children, ...props }) => {
  if (children) {
    return ( <StyledError role="alert" { ...props }>{children}</StyledError> );
  } else {
    return null;
  }
}

export default Error;
