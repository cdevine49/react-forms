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
});