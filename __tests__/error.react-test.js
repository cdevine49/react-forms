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
        id="errorId"
        className="error-class test"
        >
        Test Error
      </Error>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});