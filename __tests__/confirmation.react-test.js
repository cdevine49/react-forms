import React from 'react';
import Confirmation from '../src/components/textInputs/confirmation';
import { shallow } from 'enzyme';

describe("Confirmation", () => {
  const match = 'test';
  const miss = "abcd"
  const message = "Should equal 'test'"

  const container = shallow(
    <Confirmation
      match={match}
      message={message}
      />
  );
  const errors = container.props().errors;
  const error = errors[0];

  test("Errors prop has length of one", () => {
    expect(errors.length).toBe(1);
  });

  test("Error prop's handle function returns false when value is equivalent to match", () => {
    expect(error._handle(match)).toBe(false);
  });

  test("Error prop's handle function returns true when value is not equivalent to match", () => {
    expect(error._handle(miss)).toBe(true);
    expect(error._handle(undefined)).toBe(true);
    expect(error._handle(null)).toBe(true);
    expect(error._handle(false)).toBe(true);
  });

  test("Error prop's message equals Confirmation's message prop", () => {
    expect(error.message).toBe(message)
  });
});