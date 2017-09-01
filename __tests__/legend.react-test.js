import React from 'react';
import Legend from '../src/components/legend';
import renderer from 'react-test-renderer';

describe('Legend', () => {
  test("without child renders null", () => {
    const tree = renderer.create(
      <Legend
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders with child", () => {
    const tree = renderer.create(
      <Legend>Test Legend</Legend>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("accepts props", () => {
    const tree = renderer.create(
      <Legend
        id="legendId"
        className="legend-class test"
        >
        Label Fieldset
      </Legend>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});