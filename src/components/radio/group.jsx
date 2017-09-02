import React from 'react';
import Legend from '../legend';
import Error from '../error';
import Underline from '../underline';
import setClassName from '../../helpers/setClassName';

const RadioGroup = (
  {
    children,
    currentValue,
    errorMessage,
    errorProps: {
      className,
      ...errorProps
    },
    legend,
    legendProps: {
      className: legendClass,
      ...legendProps
    },
    onChange,
    underlineProps: {
      underlineClass,
      ...underlineProps
    },
    ...props
  }
) => {

  return (
    <fieldset className={ setClassName(['radio-button-container', setClassName]) } { ...props }>
      <Legend className={ setClassName(['radio-group-legend', legendClass]) } { ...legendProps }>{ legend }</Legend>
      {children.map((child, index) =>
        React.cloneElement(child,
          {
            key: ('radio-button-' +  index),
            checked: (currentValue === child.props.value),
            onChange
          })
        )
      }
      <Error className={ setClassName(['radio-group-error', errorClass]) } { ...errorProps } >{ errorMessage }</Error>
      <Underline className={ setClassName(['radio-group-underline', underlineClass]) } { ...underlineProps } >{ underline }</Underline>
    </fieldset>
  );
}

export default RadioGroup;
