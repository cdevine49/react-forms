import React from 'react';
import { Submit } from '../../../lib/elements/button';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test('renders with default props', () => {
  const tree = renderer.create(
    <Submit
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('accepts new props', () => {
  const onFocus = jest.fn();
  const tree = renderer.create(
    <Submit
      id="submitId"
      className="classy submit"
      onFocus={ onFocus }
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('default children can be overridden', () => {
  const tree = renderer.create(
    <Submit>New Child</Submit>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
