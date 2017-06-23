import React from 'react';
import FlagInput from './flagInput';
import Countries from './countries';
import Error from './error';
import withErrors from './withErrors';
import setClassName from '../helpers/setClassName';

class FlagContainer extends React.Component {
  constructor(props){
  	super();
  	this.state = {
      countryIndex: 0,
      selectingCountry: false
    };
  }

  render() {
    const {
      labelText, type, id, country, placeholder, labelClass,
      inputClass, onChangeCountry, onChangeText, underline, containerClass,
      flag, name, code
    } = this.props;
    const { displayErrors, errorMessage, countryIndex, entered, selectingCountry } = this.state;
    return(
      <div className={setClassName('flag-container', containerClass)}>
        {labelText && <label htmlFor={id} className={labelClass}>{labelText}</label>}
        <FlagInput
          countryIndex={countryIndex}
          onChangeText={onChangeText}
          onClick={() => this.setState({ selectingCountry: !selectingCountry })} />
        {this.state.selectingCountry && <Countries
            flag={flag}
            name={name}
            code={code}
            selectingCountry={selectingCountry}
            countryIndex={countryIndex}
            onClick={(i) => {
              this.setState({ countryIndex: i, selectingCountry: false })
              this.props.onChangeCountry(i);
            }} />}
        <Error errorMessage={errorMessage} />
        {underline && <p>{underline}</p>}
      </div>
    );
  }
}

FlagContainer.defaultProps = {
  onChangeCountry: () => {}
}

export default withErrors(FlagContainer);