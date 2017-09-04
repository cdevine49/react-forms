import React from 'react';
import Label from '../label';
import setClassName from '../../helpers/setClassName';

const RadioButton = (
  {
    className,
    containerProps: {
      containerClass,
      ...containerProps
    }
    id,
    label,
    labelProps: {
      className: labelClass,
      ...labelProps
    },
    value,
    ...props
  }
) => {

  return (
    <div className={ setClassName(['radio-button', containerClass]) } { ...containerProps }>
      <input
        id={ id }
        type='radio'
        className={ setClassName(['radio-input', className]) }
        { ...props }
        />
      <Label htmlFor={ id } className={ setClassName(['radio-label', labelClass]) }>{ label }</Label>
    </div>
  );
}
RadioButton.defaultProps = {
  id: '',
  labelText: '',
  value: null
}

export default RadioButton;
