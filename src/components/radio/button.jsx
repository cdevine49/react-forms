import React from 'react';
import Label from '../label';
import setClassName from '../../helpers/setClassName';

const RadioButton = (
  {
    className,
    containerProps: {
      containerClass,
      ...containerProps
    },
    id,
    label,
    labelProps: {
      className: labelClass,
      ...labelProps
    },
    onChange,
    value,
    ...props
  }
) => {
  !id && console.warn("RadioButton expects an id");
  !value && console.warn("RadioButton expects a value");

  return (
    <div className={ setClassName(['radio-button', containerClass]) } onClick={ onChange } { ...containerProps }>
      <input
        id={ id }
        type='radio'
        className={ setClassName(['radio-input', className]) }
        onChange={ onChange }
        value={ value }
        { ...props }
        />
      <Label htmlFor={ id } className={ setClassName(['radio-label', labelClass]) } { ...labelProps } >{ label || value }</Label>
    </div>
  );
}
RadioButton.defaultProps = {
  containerProps: {},
  id: '',
  labelProps: {},
  value: null
}

export default RadioButton;
