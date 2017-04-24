import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Submit, Input, Email } from '../src'
// import '../src/style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo />,
    document.getElementById('root')
  )
})

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      emailValue: ''
    };
  }

  render() {
    const { inputValue, emailValue } = this.state;
    return (
      <Form>
        <Input onChange={inputValue => this.setState({ inputValue })} value={inputValue} labelText="Text Input" required={true} />
        <Email onChange={emailValue => this.setState({ emailValue })} value={emailValue} />
        <Submit></Submit>
      </Form>
    )
  }
}