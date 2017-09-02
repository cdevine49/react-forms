import React from 'react';
import withErrors from './withErrors';
import Error from './error';
import Label from './label';
import Underline from './underline'
import setClassName from '../helpers/setClassName';

const TextField = ({
                      containerProps: {
                        className: containerClass,
                        ...containerProps
                      },
                      label,
                      labelProps,
                      id, className,
                      hideErrors,
                      displayErrors,
                      errorMessage,
                      errorProps,
                      underline,
                      underlineProps,
                      ...props
                   }) => {
  return (
    <div className={ setClassName(['input-container', containerClass]) } { ...containerProps }>
      <Label htmlFor={id} { ...labelProps }>{ label }</Label>
      <input
        id={ id }
        className={ setClassName([className, (errorMessage && 'error')]) }
        onFocus={hideErrors}
        onBlur={displayErrors}
        { ...props }
        />
      <Error { ...errorProps }>{errorMessage}</Error>
      <Underline { ...underlineProps }>{underline}</Underline>
    </div>
  );
}

TextField.defaultProps = {
  type: 'text',
  value: '',
  onChange: function(){},
  containerProps: {},
  errorProps: {},
  labelProps: {},
  underlineProps: {}
}

export default withErrors(TextField);
