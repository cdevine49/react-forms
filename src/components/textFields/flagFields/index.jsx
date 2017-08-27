import React from 'react';
import FlagBox from './flagInput/flagbox';
import Error from '../../error';
import Label from '../../label';
import Underline from '../../underline'
import withErrors from '../../withErrors';
import setClassName from '../../../helpers/setClassName';

class FlagField extends React.Component {
  constructor(){
  	super();
    this.onChangeCountry = this.onChangeCountry.bind(this);
  }

  onChangeCountry() {
    return countryIndex => {
      this.props.onChangeCountry(countryIndex);
    }
  }

  render() {
    const {
      fieldProps: {
        className: fieldClass,
        ...fieldProps
      },
      inputContainerProps,
      label,
      labelProps,
      errorMessage,
      errorProps,
      inputProps,
      underline,
      underlineProps,
      id,
      countryInfoIndex,
      countryIndex,
      onChangeCountry,
      ...props
    } = this.props;
    return(
      <div className={ setClassName(['input-container flag-container', fieldClass]) } { ...fieldProps }>
        <Label htmlFor={ id } { ...labelProps }>{ label }</Label>
        <div className="input-container flag-input-container" style={{position: 'relative'}} { ...inputContainerProps }>
          <FlagBox countryIndex={countryIndex} countryInfoIndex={countryInfoIndex} onChange={this.onChangeCountry()} />
          <input
            id={id}
            { ...props }
            />
        </div>
        <Error { ...errorProps }>{errorMessage}</Error>
        <Underline { ...underlineProps }>{underline}</Underline>
      </div>
    );
  }
}

FlagField.defaultProps = {
  countryIndex: 0,
  onChange: function(){},
  onChangeCountry: function(){},
  value: '',
  errorProps: {},
  fieldProps: {},
  inputContainerProps: {},
  labelProps: {},
  underlineProps: {}
}

export default withErrors(FlagField);