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
    test('')
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