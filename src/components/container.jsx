import React from 'react';
import withErrors from './withErrors';
import Error from './error';
import setClassName from '../helpers/setClassName';

const Container = ({
                      containerProps: {
                        className: containerClass,
                        ...containerProps
                      },
                      label,
                      labelProps,
                      id, className,
                      onChange,
                      errorMessage,
                      errorProps,
                      underline,
                      ...props
                   }) => {
  return (
    <div className={ setClassName(['input-container', containerClass]) } { ...containerProps }>
      {label && <label htmlFor={id} { ...labelProps }>{ label }</label>}
      <input
        id={ id }
        className={ setClassName([className, (errorMessage && 'error')]) }
        onChange={ function(e){ onChange(e.currentTarget.value) } }
        { ...props }
        />
      <Error errorMessage={ errorMessage } { ...errorProps } />
      { underline && <p>{ underline }</p> }
    </div>
  );
}

Container.defaultProps = {
  type: 'text',
  value: '',
  onChange: function(){},
  containerProps: {},
  errorProps: {},
  labelProps: {}
}

export default withErrors(Container);
