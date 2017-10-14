import React from 'react';
import Email from '../../lib/components/textFields/email';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe("Email", () => {
  describe("Default", () => {
    const email = shallow(
      <Email />
    );

    const errors = email.props().errors;
    const error = errors[0];

    test("Errors prop has length of one", () => {
      expect(errors.length).toBe(1);
    });

    test("Error prop's handle function returns false when value contains '@'", () => {
      expect(error._handle("@")).toBe(false);
      expect(error._handle("as@asf")).toBe(false);
      expect(error._handle("me@gmail.com")).toBe(false);
    });

    test("Error prop's handle function returns true when value does not include @", () => {
      expect(error._handle("")).toBe(true);
      expect(error._handle("megmail.com")).toBe(true);
    });

    test("Error prop's has message", () => {
      expect(error.message).toBe("Not a valid email");
    });

    test("has correct label", () => {
      const tree = renderer.create(
        <Email />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});