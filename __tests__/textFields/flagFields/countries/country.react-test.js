import React from 'react';
import Country from '../../../../src/components/textFields/flagFields/countries/country';
import renderer from 'react-test-renderer';

describe("Country", () => {
  describe("Without Props", () => {
    test("renders empty list", () => {
      const tree = renderer.create(
        <Country
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});