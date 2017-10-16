import React from 'react';
import FormContainer from '../lib/components/form';
import TextField from '../lib/components/textField';
import { mount } from 'enzyme';
import 'jest-styled-components';

describe("Submission", () => {
  let onSubmit;
  const form = mount(
    <FormContainer />
  );

  beforeEach(() => {
    onSubmit = jest.fn();
    form.setProps({ onSubmit });
  });

  test("calls onSubmit prop when submittable array empty", () => {


    form.setState({ submittable: [] });
    expect(onSubmit.mock.calls.length).toBe(0);
    form.simulate('submit');
    expect(onSubmit.mock.calls.length).toBe(1);
  });

  test("calls onSubmit prop when submittable array elements all truthy", () => {
    form.setState({ submittable: [ true, 'true', 1] });
    expect(onSubmit.mock.calls.length).toBe(0);
    form.simulate('submit');
    expect(onSubmit.mock.calls.length).toBe(1);
  });

  test("does not call onSubmit prop when any submittable array elements falsey", () => {
    expect(onSubmit.mock.calls.length).toBe(0);
    form.setState({ submittable: [ true, 'true', false, 1] });
    form.simulate('submit');

    expect(onSubmit.mock.calls.length).toBe(0);

    form.setState({ submittable: [ true, 'true', '', 1] });
    form.simulate('submit');
    expect(onSubmit.mock.calls.length).toBe(0);
  });
});