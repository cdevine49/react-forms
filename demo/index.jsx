import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from '../src'
// import '../style.css'

document.addEventListener('DOMContentLoaded', () => {
  console.log('sdjfls');
  ReactDOM.render(
    <MyComponent />,
    document.querySelector('#root')
  )
})