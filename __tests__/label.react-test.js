import React from 'react';
import Label from '../src/components/label';
import renderer from 'react-test-renderer';

describe("Label", () => {
  test("does not render without child", () => {
    const tree = renderer.create(
      <Label
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders with child", () => {
    const tree = renderer.create(
      <Label>Test Label</Label>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test.only("accepts props", () => {
    const tree = renderer.create(
      <Label
        htmlFor="htmlFor"
        id="labelId"
        className="label-class test"
        >
        Test Input
      </Label>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});