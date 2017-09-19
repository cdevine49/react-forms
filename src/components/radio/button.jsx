import React from 'react';
import Label from '../label';
import setClassName from '../../helpers/setClassName';

const RadioButton = (
  {
    className,
    containerProps: {
      className: containerClass,
      ...containerProps
    },
    id,
    label,
    labelProps: {
      className: labelClass,
      ...labelProps
    },
    onChange: onChangeCallback,
    value,
    ...props
  }
) => {
  !id && console.warn("RadioButton expects an id");
  !value && console.warn("RadioButton expects a value");

  const onChange = e => {
    e.stopPropagation();
    onChangeCallback();
  };

  const onClick = e => {
    e.stopPropagation();
  };

  return (
    <div className={ setClassName(['radio-button', containerClass]) } onClick={ onChange } { ...containerProps }>
      <input
        id={ id }
        type='radio'
        className={ setClassName(['radio-input', className]) }
        onChange={ onChange }
        onClick={ onClick }
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
  value: ''
}

export default RadioButton;
