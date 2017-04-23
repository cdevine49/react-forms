import React from 'react'
import ReactDOM from 'react-dom'
import { Form , Submit } from '../src'
// import '../style.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Form>
      <Submit></Submit>
    </Form>,
    document.getElementById('root')
  )
})