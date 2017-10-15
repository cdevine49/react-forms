import React from 'react';
import Input from '../elements/input';
import Container from '../elements/container';
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
    <Container className={ containerClass } { ...containerProps }>
      <Label htmlFor={ id } required={ required } { ...labelProps }>{ label }</Label>
      <Input
        id={ id }
        error={ !!errorMessage }
        aria-describedby={ setClassName([errorId, underlineId]) }
        aria-required={ !!required }
        aria-invalid={ !!errorMessage }
        { ...props }
        />
      <Error id={ errorId } { ...errorProps }>{ errorMessage }</Error>
      <Underline id={ underlineId } { ...underlineProps }>{ underline }</Underline>
    </Container>
  );
};

export default TextInput;

TextInput.defaultProps = {
  containerProps: {},
  errorProps: {},
  labelProps: {},
  underlineProps: {}
}