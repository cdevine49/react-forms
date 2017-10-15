import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.js';

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render(App);
});
