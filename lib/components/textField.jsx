import React from 'react';
import FormField from './formField';
import TextInput from './TextInput';
import Error from '../elements/error';
import Label from './label';
import Underline from '../elements/underline'
import setClassName from '../helpers/setClassName';

const TextField = ({ displayErrors, errors, required, validate, value, ...props}) => {
  return (
    <FormField
      displayErrors={ displayErrors }
      errors={ errors }
      required={ required }
      validate={ validate }
      value={ value }
    >
      { (errorMessage, displayErrors) => (
        <TextInput
          errorMessage={ errorMessage }
          onBlur={ displayErrors }
          required={ required }
          value={ value }
          { ...props }
          />
      ) }
    </FormField>
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

export default TextField;
