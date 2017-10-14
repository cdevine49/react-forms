import React from 'react';
import Flag from '../../../../lib/components/textFields/flagFields/shared/flag';
import renderer from 'react-test-renderer';

describe("Country", () => {
  test("Without Props", () => {
    const tree = renderer.create(
      <Flag />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("With Props", () => {
    test('offset', () => {
      const tree = renderer.create(
        <Flag offset="-44px" />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('className', () => {
      const tree = renderer.create(
        <Flag className="test" />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});