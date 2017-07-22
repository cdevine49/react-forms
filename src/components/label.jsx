import React from 'react';

const Label = ({children, ...props}) => {
  if (children) {
    return ( <label {...props}>{children}</label> );
  } else {
    return null;
  }
}

export default Label;
