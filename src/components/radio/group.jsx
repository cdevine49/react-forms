import React from 'react';
import Legend from '../legend';
import setClassName from '../helpers/setClassName';

const RadioGroup = (
  {
    children,
    currentValue,
    legend,
    legendProps: {
      className: legendClass,
      ...labelProps
    },
    onChange,
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
    </fieldset>
  );
}
RadioGroup.defaultProps = {
  options: {},
  required: true,
  header: null
}

export default RadioGroup;
