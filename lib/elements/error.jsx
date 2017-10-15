import React from 'react';
import styled from 'styled-components';

const Error = ({ children, ...props }) => {
  if (children) {
    return React.createElement(styled.p.attrs({
      role: 'alert'
    })`
      margin-top: 6.5px;
      color: #dd4b39;
    `, props, children);
  }
  return null;
};

export default Error;