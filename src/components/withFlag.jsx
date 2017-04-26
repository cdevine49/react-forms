const withFlag = (input) => class extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return <input {...this.props} {...this.state} />;
  }
}

export default withFlag;