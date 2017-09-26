import React from 'react';

const Label = ({ children, required, ...props }) => {
  if (children) {
    return (
      <label { ...props }>
        { children }
        { required && <span className="required">*</span> }
      </label>
    );
  } else {
    return null;
  }
}

export default Label;
