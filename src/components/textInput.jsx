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
                      required,
                      errorMessage,
                      errorProps: {
                        id: errorId,
                        ...errorProps
                      },
                      underline,
                      underlineProps: {
                        id: underlineId,
                        ...underlineProps
                      },
                      ...props
                   }) => {
  return (
    <div className={ setClassName(['input-container', containerClass]) } { ...containerProps }>
      <Label htmlFor={ id } required={ required } { ...labelProps }>{ label }</Label>
      <input
        id={ id }
        className={ setClassName([className, (errorMessage && 'error')]) }
        aria-describedby={ setClassName([errorId, underlineId]) }
        aria-required={ !!required }
        aria-invalid={ !!errorMessage }
        { ...props }
        />
      <Error id={ errorId } { ...errorProps }>{ errorMessage }</Error>
      <Underline id={ underlineId } { ...underlineProps }>{ underline }</Underline>
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