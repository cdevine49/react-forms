import React from 'react';
import FlagInput from './flagInput';
import Countries from './countries';
import Error from '../../error';
import withErrors from '../../withErrors';
import setClassName from '../../../helpers/setClassName';

class FlagField extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      countryIndex: this.props.countryIndex,
      textValue: this.props.textValue,
      selectingCountry: false
    };
    this.toggleSelecting = this.toggleSelecting.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggleSelecting() {
    this.setState({ selectingCountry: !this.state.selectingCountry });
  }

  onChange(e) {
    const textValue = e.currentTarget.value;
    this.setState({ textValue }, () => this.props.onChange(textValue))
  }

  render() {
    const {
      labelText, type, id, country, placeholder, labelClass,
      inputClass, onChangeCountry, onChange, underline, containerClass,
      flag, name, code
    } = this.props;
    const { displayErrors, errorMessage, countryIndex, entered, selectingCountry, textValue } = this.state;
    return(
      <div className={setClassName('input-container flag-container', containerClass)}>
        {labelText && <label htmlFor={id} className={labelClass}>{labelText}</label>}
        <div style={{position: 'relative'}}>
          <FlagInput
            countryIndex={countryIndex}
            onChange={this.onChange}
            value={textValue}
            onClick={this.toggleSelecting} />
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
        </div>
        <Error errorMessage={errorMessage} />
        {underline && <p>{underline}</p>}
      </div>
    );
  }
}

FlagField.defaultProps = {
  countryIndex: 0,
  onChange: function(){},
  onChangeCountry: function(){},
  textValue: ''
}

export default withErrors(FlagField);