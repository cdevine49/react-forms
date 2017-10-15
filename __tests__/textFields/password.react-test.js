import React from 'react';
import Password from '../../lib/components/textFields/password';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe("Password", () => {
  describe("Default", () => {
    const valid = "Password1";
    const noNumbers = "Password";
    const noLowerCase = "PASSWORD1"
    const noUpperCase = "password1"
    const tooShort = "pswrd1"
    const tooLong = "Password1Password1Password1Password1Password1Password1Password1Password1Password1Password1Password1Password1Password1Password1Password1Password1"
    const pasword = shallow(
      <Password />
    );

    const errors = pasword.props().errors;

    test("9 letter password with uppercase, lowercase, and number is valid", () => {
      expect(errors.some(error => error._handle(valid))).toBe(false);
    });

    test("Must contain one or more numbers", () => {
      expect(errors.some(error => error._handle(noNumbers))).toBe(true);
    });

    test("Must contain one or more lowercase letters", () => {
      expect(errors.some(error => error._handle(noLowerCase))).toBe(true);
    });

    test("Must contain one or more uppercase letters", () => {
      expect(errors.some(error => error._handle(noUpperCase))).toBe(true);
    });

    test("Must be more than 8 characters long", () => {
      expect(errors.some(error => error._handle(tooShort))).toBe(true);
    });

    test("Must be less than 100 characters long", () => {
      expect(errors.some(error => error._handle(tooLong))).toBe(true);
    });

    test("has correct props", () => {
      const tree = renderer.create(
        <Password />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});