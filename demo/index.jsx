import React from 'react'
import ReactDOM from 'react-dom'
import { Form , Submit, InputContainer } from '../src'
import '../src/style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Form>
      <InputContainer labelText="Text Input" />
      <Submit></Submit>
    </Form>,
    document.getElementById('root')
  )
})