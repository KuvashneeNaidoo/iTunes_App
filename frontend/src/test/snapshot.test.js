import React from "react";
import App from "../App.js";
// Imported react-test-renderer to render snapshots.
import renderer from "react-test-renderer";

/*
 * Construct a tree variable that contains the DOM tree of the rendered component <App /> which is in JSON format.
 * expect(tree).toMatchSnapshot() creates a snapshot of which will be saved.
 * Return a JSON object of the rendered DOM tree as a snapshot using .toJSON() method.
 */

test("Renders without crashing?", () => {
  // Creating a JSON representation of the rendered App component
  const tree = renderer.create(<App />).toJSON();
  // Compare the rendered output to the saved snapshot
  expect(tree).toMatchSnapshot();
});
