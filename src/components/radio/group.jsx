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

  const onKeyPress = (e, index) => {
    switch (e.keyCode) {
      case 37:
        _onPrev(index);
        break;
      case 38:
        _onPrev(index);
        break;
      case 39:
        console.log(39)
        _onNext(index);
        break;
      case 40:
        _onNext(index);
        break;
      default:
        break;
    }
  }

  const _onNext = index => {
    let nextIndex;
    const lastIndex = children.length - 1;
    if (index === lastIndex) {
      nextIndex = 0;
    } else {
      nextIndex = index + 1;
    }
    onChange(children[nextIndex].props.value);
  };

  const _onPrev = index => {
    let prevIndex;
    if (index === 0) {
      prevIndex = children.length - 1;
    } else {
      prevIndex = index - 1;
    }
    onChange(children[prevIndex].props.value);
  };

  return (
    <fieldset className={ setClassName(['radio-button-container', className]) } { ...props }>
      <Legend className={ setClassName(['radio-group-legend', legendClass]) } { ...legendProps }>{ legend }</Legend>
      {children.map((child, index) =>
        React.cloneElement(child,
          {
            key: ('radio-button-' +  index),
            checked: (currentValue === child.props.value),
            onChange,
            onKeyPress: e => { onKeyPress(e, index) }
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
