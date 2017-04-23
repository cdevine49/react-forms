import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Submit, TextInput } from '../src'
// import '../src/style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Form>
      <TextInput labelText="Text Input" required={true} />
      <Submit></Submit>
    </Form>,
    document.getElementById('root')
  )
})