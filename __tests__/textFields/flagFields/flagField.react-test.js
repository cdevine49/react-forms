import React from 'react';
import FlagField from '../../../src/components/textFields/flagFields';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe("FlagField", () => {
  test('Default', () => {
    const tree = renderer.create(
      <FlagField
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('props populate the input tag', () => {
    const tree = renderer.create(
      <FlagField
        id="test-input"
        className="test-class another class"
        value="Can set a default value"
        type="email"
        onChange={jest.fn()}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});