import React from 'react';
import Country from './country';
import CountriesArray from '../helpers/countries';
import ScrollView from './scrollView';

class Countries extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      hovered: false
    };
  }

  _countries() {
    const query = this.state.query.toLowerCase();
    return CountriesArray.map((flag, i) => {
      const [offset, name, code] = flag;
      const start = name.slice(0, query.length).toLowerCase();
      if (start === query || query.length < 1) {
        return (
          <Country key={i}
            className={i === this.props.countryIndex && !this.state.hovered ? 'hover-style' : ''}
            offset={this.props.flag && offset}
            name={this.props.name && name}
            code={this.props.code && code}
            onClick={() => {
                this.props.onClick(i);
                this.setState({ hovered: false });
              }
            } />
        );
      }
    });
  }

  render() {
    return (
      <div className='countries-container'>
        <input type='text'
          ref={(input) => this.searchInput = input}
          onClick={ () => this.setState({ hovered: true }) }
          placeholder='Search Countries'
          className='country-search'
          onChange={(e) => this.setState({ query: e.currentTarget.value })}
          value={this.state.query}
          />
        <div className='separator'></div>
        <ScrollView index={this.props.countryIndex} className="countries" onMouseOver={ () => this.setState({ hovered: true }) }>
          {this._countries()}
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

