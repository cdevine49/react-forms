import React from 'react';

const Label = ({id, children, ...props}) => {
  if (children) {
    return ( <label htmlFor={id} {...props}>{children}</label> );
  } else {
    return null;
  }
}

export default Label;
