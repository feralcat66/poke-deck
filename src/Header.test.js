import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.js'

test ('this renders header', () => {
    const header = renderer
    .create(<Header />)
    .toJSON();
    expect (header).toMatchSnapshot();
})