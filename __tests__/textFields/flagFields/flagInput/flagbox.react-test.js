import React from 'react';
import Flagbox from '../../../../src/components/textFields/flagFields/flagInput/flagbox';
import renderer from 'react-test-renderer';

describe("Flagbox", () => {
  test("Without Props", () => {
    const tree = renderer.create(
      <Flagbox />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("CountryIndex", () => {
    let tree = renderer.create(
      <Flagbox countryIndex={5} />
    ).toJSON();

    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Flagbox countryIndex={10} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  })
});