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
    });

    test('Calls console.warn if not given a value prop', () => {
      const warn = jest.fn();
      const id = "Don't call my console warn";
      console.warn = warn;

      expect(warn).not.toHaveBeenCalled();

      const button = shallow(
        <RadioButton id={ id } />
      );

      expect(warn).toHaveBeenCalledTimes(1);

      const buttonWithId = shallow(
        <RadioButton id={ id } value="I exist" />
      );

      expect(warn).toHaveBeenCalledTimes(1);
    });
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

    test('Accepts containerProps', () => {
      const tree = renderer.create(
        <RadioButton containerProps={{
            id: 'div-id',
            className: 'I get added to default classes',
            onKeyUp: function(){}
          }}
        />
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Input', () => {
    test('Accepts props passed directly to component', () => {
      const tree = renderer.create(
        <RadioButton
          id='my-id'
          className='add me'
          value="I am the value"
          data-item={['array', 1]}
          />
      );

      expect(tree).toMatchSnapshot();
    });

    test('OnChange calls onChange prop', () => {
      const onChange = jest.fn();
      const button = shallow(
        <RadioButton onChange={ onChange } />
      );

      expect(onChange).not.toHaveBeenCalled();
      button.find('input').simulate('change');
      expect(onChange).toHaveBeenCalled();
    });
  });
});



//




//




//