import React from 'react';
import Flag from '../shared/flag';
import FlagArray from '../shared/countries';
import Countries from '../countries';

export default class FlagBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selectingCountry: false
    }

    this.toggleSelecting = this.toggleSelecting.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
  }

  toggleSelecting() {
    this.setState((prevState, props) => ({ selectingCountry: !prevState.selectingCountry }));
  }

  selectCountry() {
    return i => {
      this.setState({ selectingCountry: false }, () => {
        this.flagButton && this.flagButton.focus();
        this.props.onChange(i);
      });
    }
  }

  render() {
    const { selectingCountry } = this.state;
    const { countryInfoIndex, countryIndex } = this.props;
    const [offset] = FlagArray[countryIndex];

    return (
      <div className="flagbox-container">
        <button
          type="button"
          aria-pressed={selectingCountry}
          className="flagbox"
          onClick={this.toggleSelecting}
          ref={ button => { this.flagButton = button; } }>
          <Flag offset={offset} />
          <img src="/images/select-box-button.png" className='select-box-button' />
        </button>
        {selectingCountry && <Countries
            countryInfoIndex={countryInfoIndex}
            countryIndex={countryIndex}
            onClick={this.selectCountry()} />}
      </div>
    );
  }
};

FlagBox.defaultProps = {
  countryInfoIndex: 2,
  countryIndex: 0,
  onChange: function(){}
}