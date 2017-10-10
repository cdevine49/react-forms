import React from 'react';
import FormField from '../src/components/formField'
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

test('errorMessage state starts as empty string', () => {
  const child = jest.fn(() => null);
  const wrapper = shallow(<FormField>{ child }</FormField>);
  expect(wrapper.state().errorMessage).toBe('');
});

test('calls validate with errorMessage', () => {
  const no = "Don't show up";
  const errorMessage = 'Whoopsie';
  const validate = jest.fn();
  const child = jest.fn(() => null);
  const wrapper = mount(
    <FormField
      errors={ [{ _handle: () => false, message: '' }, { _handle: () => true, message: errorMessage }] }
      validate={ validate }
    >{ child }</FormField>);
  expect(validate).toHaveBeenCalled();
  // because an error handler evaluates to true,
  // there is an error (not yet set as state) and the opposite boolean value is passed to validate
  expect(validate).toHaveBeenCalledWith(false);
});

describe('child', () => {
  test('renders as function', () => {
    const child = () => <div id="child-element"></div>;
    const tree = renderer.create(
      <FormField>
        { child }
      </FormField>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('receives errorMessage state as first argument', () => {
    const errorMessage = 'Whoopsie';
    const child = jest.fn(() => null);
    const wrapper = shallow(<FormField>{ child }</FormField>);
    // First argument of the first call
    expect(child.mock.calls[0][0]).toBe('');
    wrapper.setState({ errorMessage: 'Whoopsie' });
    // First argument of the second call
    expect(child.mock.calls[1][0]).toBe(errorMessage);
  });

  test('second argument checks parent for errors', () => {
    const errorMessage = 'Whoopsie';
    const child = jest.fn((e, displayErrors) => <div id="mock-child" onClick={ displayErrors }></div>);
    const wrapper = shallow(
      <FormField
        errors={ [{ _handle: () => true, message: errorMessage }] }
      >
        { child }
      </FormField>);
    expect(wrapper.state().errorMessage).toBe('');
    wrapper.find('#mock-child').simulate('click');
    expect(wrapper.state().errorMessage).toBe(errorMessage);
  });

  test('third argument hides parent errors', () => {
    const errorMessage = 'Whoopsie';
    const child = jest.fn((e, d, hideErrors) => <div id="mock-child" onClick={ hideErrors }></div>);
    const wrapper = shallow(
      <FormField
        errors={ [{ _handle: () => true, message: errorMessage }] }
      >
        { child }
      </FormField>);
    wrapper.setState({ errorMessage });
    expect(wrapper.state().errorMessage).toBe(errorMessage);
    wrapper.find('#mock-child').simulate('click');
    expect(wrapper.state().errorMessage).toBe('');
  });
});