import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test ('this renders header', () => {
  const header = renderer
  .create(<App />)
  .toJSON();
  expect (header).toMatchSnapshot();
})
