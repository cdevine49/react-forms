const withFlag = (input) => class extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <FlagBox
          countryIndex={countryIndex}
          onClick={() => this.setState({ selectingCountry: !selectingCountry })}
          />
        <input {...this.props} {...this.state} />
      </div>)
  }
}

export default withFlag;