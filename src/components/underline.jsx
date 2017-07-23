import React from 'react';

const Underline = ({children, ...props}) => {
  if (children) {
    return ( <p { ...props }>{children}</p> );
  } else {
    return null;
  }
}

export default Underline;
