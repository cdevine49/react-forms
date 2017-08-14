import React from 'react';
import Country from './country';
import CountriesArray from '../shared/countries';
import ScrollView from '../../../scrollView';

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      hovered: false
    };
    this.selectCountry = this.selectCountry.bind(this);
    this.update = this.update.bind(this);
  }

  selectCountry(i) {
    return () => {
      this.props.onClick(i);
      this.setState({ hovered: false });
    };
  }

  _countries() {
    const query = this.state.query.toLowerCase();
    return CountriesArray.reduce((acc, flag, i) => {
      const [offset, name] = flag;
      const value = flag[this.props.countryInfoIndex];
      const start = name.slice(0, query.length).toLowerCase();
      if (start === query || query.length < 1) {
        acc.push(
          <Country key={i}
            className={i === this.props.countryIndex && !this.state.hovered ? 'hover-style' : ''}
            offset={this.props.flag && offset}
            name={this.props.name && name}
            value={value}
            onClick={this.selectCountry(i)} />
        );
      }
      return acc;
    }, []);
  }

  update(field) {
    let that = this;
    return function(e) { that.setState({ [field]: e.currentTarget.value }) };
  }

  hoverState(bool) {
    let that = this;
    return function(e) { that.setState({ hovered: bool }) };
  }

  render() {
    const countries = this._countries();
    let bottom, height;
    if (countries.length > 5) {
      bottom = 166;
      height = 125;
    } else {
      height = countries.length * 24 + 1;
      bottom = countries.length * 24 + 42;
    }
    return (
      <div className='countries-container' style={{bottom: `-${bottom}px`}}>
        <input type='text'
          ref={(input) => this.searchInput = input}
          onClick={ this.hoverState(true) }
          placeholder='Search Countries'
          className='country-search'
          onChange={ this.update("query") }
          value={this.state.query}
          />
        <div className='separator'></div>
        <ScrollView
          index={this.props.countryIndex}
          className="countries"
          onMouseOver={ this.hoverState(true) }
          style={{height: `${height}px`}}>
          {countries}
        </ScrollView>
        </div>
    );
  }
}

Countries.defaultProps = {
  countryIndex: 0,
  flag: true,
  name: true,
  code: false
}

// export default scrollable(Countries);
export default Countries;

