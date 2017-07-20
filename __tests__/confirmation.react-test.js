import React from 'react';
import Confirmation from '../src/components/confirmation';
import { mount } from 'enzyme';

describe("Match", () => {
  let wrapper, input;
  const match = 'test';
  const miss = "abcd"
  const message = "Should equal 'test'"
  beforeEach(() => {
    wrapper = mount(
      <Confirmation
        match={match}
        message={message}
        />
    );
    input = wrapper.find('input');
  });

  test("If confirmation value equals match value, no error message appears", () => {
    wrapper.setProps({ value: match });
    input.simulate('blur');
    expect(wrapper.find('span').exists()).toBe(false);
  });

  test("If confirmation value does not equal match value, error message appears", () => {
    wrapper.setProps({ value: miss });
    input.simulate('blur');
    expect(wrapper.find('span').text()).toBe(message);
  });
});