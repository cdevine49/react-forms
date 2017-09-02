import React from 'react';
import Legend from '../legend';
import Error from '../error';
import Underline from '../underline';
import setClassName from '../../helpers/setClassName';

const RadioGroup = (
  {
    children,
    className,
    currentValue,
    errorMessage,
    errorProps: {
      errorClass,
      ...errorProps
    },
    hideErrors,
    legend,
    legendProps: {
      className: legendClass,
      ...legendProps
    },
    onChange,
    underline,
    underlineProps: {
      underlineClass,
      ...underlineProps
    },
    ...props
  }
) => {

  return (
    <fieldset className={ setClassName(['radio-button-container', className]) } { ...props }>
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

RadioGroup.defaultProps = {
  children: [],
  errorProps: {},
  legendProps: {},
  underlineProps: {}
}

export default RadioGroup;
