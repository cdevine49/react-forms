import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Submit, Container, Email } from '../src'
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
        <Container onChange={inputValue => this.setState({ inputValue })} value={inputValue} labelText="Text Input" required={true} />
        <Email onChange={emailValue => this.setState({ emailValue })} value={emailValue} underline="The email input component passes an 'errors' prop to the default input that triggers if the value doesn't include a '@'" />
        <Submit></Submit>
      </Form>
    )
  }
}