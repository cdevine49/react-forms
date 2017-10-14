import React from 'react';
import Submit from '../lib/components/submit';
import renderer from 'react-test-renderer';

describe("Submit", () => {
  test('renders with default props', () => {
    const tree = renderer.create(
      <Submit
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('accepts new props', () => {
    const tree = renderer.create(
      <Submit
        id="submitId"
        className="classy submit"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});