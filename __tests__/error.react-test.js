import React from 'react';
import Error from '../src/components/error';
import renderer from 'react-test-renderer';

describe("Errors", () => {
  test("does not render without child", () => {
    const tree = renderer.create(
      <Error
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders with child", () => {
    const tree = renderer.create(
      <Error>Test Error</Error>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("accepts props", () => {
    const tree = renderer.create(
      <Error
        id="labelId"
        className="label-class test"
        >
        Test Input
      </Error>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});