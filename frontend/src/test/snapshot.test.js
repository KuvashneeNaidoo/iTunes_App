import React from 'react';
// The App.js file has been imported for testing. //
import App from '../App.js';
// I have also imported the react-test-renderer needed to render snapshots. //
import renderer from 'react-test-renderer';

/*
 * To perform a snapshot test, we will construct a tree variable that contains the DOM tree of the rendered component <App /> which is in JSON format.
 * expect(tree).toMatchSnapshot() will create a snapshot of which will be saved.
 * In order to return a JSON object of the rendered DOM tree as a snapshot, the .toJSON() method is used.
 */

test('Renders without crashing?', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
