import React from 'react';
import Error from './error';
import Label from './label';
import Underline from './underline'
import setClassName from '../helpers/setClassName';

const TextInput = ({
                      containerProps: {
                        className: containerClass,
                        ...containerProps
                      },
                      label,
                      labelProps,
                      id,
                      className,
                      errorProps,
                      underline,
                      underlineProps,
                      errorMessage,
                      ...props
                   }) => {
  return (
    <div className={ setClassName(['input-container', containerClass]) } { ...containerProps }>
      <Label htmlFor={id} { ...labelProps }>{ label }</Label>
      <input
        id={ id }
        className={ setClassName([className, (errorMessage && 'error')]) }
        { ...props }
        />
      <Error { ...errorProps }>{errorMessage}</Error>
      <Underline { ...underlineProps }>{underline}</Underline>
    </div>
  );
};

export default TextInput;

TextInput.defaultProps = {
  containerProps: {},
  errorProps: {},
  labelProps: {},
  underlineProps: {}
}