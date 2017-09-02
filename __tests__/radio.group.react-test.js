import React from 'react';
import RadioGroup from '../src/components/radio/group';
import renderer from 'react-test-renderer';

describe('RadioGroup', () => {
  test('Default', () => {
    const tree = renderer.create(
      <RadioGroup
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});