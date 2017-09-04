import React from 'react';
import RadioGroup from '../../src/components/radio/group';
import renderer from 'react-test-renderer';

describe('RadioGroup', () => {
  test('Default', () => {
    const tree = renderer.create(
      <RadioGroup
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('Fieldset', () => {
    test('accepts props by default', () => {
      const tree = renderer.create(
        <RadioGroup
          id='field-radio'
          className='add-me'
          data-test='some data'
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

  });

  describe('Legend', () => {

  });
});