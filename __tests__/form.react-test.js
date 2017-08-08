import React from 'react';
import Form from '../src/components/form';
import textField from '../src/components/textField';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe("Form", () => {
  describe("Default", () => {
    test("renders with default props", () => {
      const tree = renderer.create(
        <Form
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  test("accepts props", () => {
    const tree = renderer.create(
      <Form
        id="formId"
        className="new-class"
        noValidate={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe("Submission", () => {
    let onSubmit;
    const form = mount(
      <Form>
        <input type="submit" />
      </Form>
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
});