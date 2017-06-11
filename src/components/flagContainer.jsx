import React from 'react';
import FlagInput from './flagInput';
import Error from './error';
import withErrors from './withErrors';
import setClassName from '../helpers/setClassName';

class FlagContainer extends React.Component {
  constructor(props){
  	super();
  	this.state = {};
  }

  render() {
    const {labelText, type, id, country, placeholder, labelClass, inputClass, onChangeNumber, onChangeCountry, underline, containerClass } = this.props;
    const { displayErrors, errorMessage, countryIndex, entered, selectingCountry } = this.state;
    return(
      <div className={setClassName('flag-container', containerClass)}>
        {labelText && <label htmlFor={id} className={labelClass}>{labelText}</label>}
        <FlagInput countryIndex={countryIndex} selectingCountry={selectingCountry} />
        <Error errorMessage={errorMessage} />
        {underline && <p>{underline}</p>}
      </div>
    );
  }
}

export default withErrors(FlagContainer);