import React from 'react'
import ReactDOM from 'react-dom'
import { Form, Submit, Input } from '../src'
// import '../src/style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Form>
      <Input labelText="Text Input" required={true} />
      <Submit></Submit>
    </Form>,
    document.getElementById('root')
  )
})