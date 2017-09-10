import React from 'react';
import RadioButton from '../../src/components/radio/button';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
console.warn = () => {}
describe('RadioButton', () => {
  test('Default', () => {
    const tree = renderer.create(
      <RadioButton
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('Warnings', () => {
    test('Calls console.warn if not given an id prop', () => {
      const warn = jest.fn();
      const value = "Don't call my console warn";
      console.warn = warn;

      expect(warn).not.toHaveBeenCalled();

      const button = shallow(
        <RadioButton value={ value } />
      );

      expect(warn).toHaveBeenCalledTimes(1);

      const buttonWithId = shallow(
        <RadioButton id="I-exist" value={ value } />
      );

      expect(warn).toHaveBeenCalledTimes(1);
    })
  });

  describe('Container', () => {
    test('OnClick calls the onChange prop', () => {
      const onChange = jest.fn();
      const button = shallow(
        <RadioButton onChange={ onChange } />
      );

      expect(onChange).not.toHaveBeenCalled();
      button.simulate('click');
      expect(onChange).toHaveBeenCalled();
    });
  });
});