import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const reactAppContainer = document.getElementById('react-app');

if (reactAppContainer) {
  const render = function render(Component) {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('react-app'),
    );
  };

  render(App);
}
