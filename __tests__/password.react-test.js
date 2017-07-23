import React from 'react';
import Password from '../src/components/textInputs/password';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

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
    //
    // test("must have at least 8 charcters", () => {
    //   expect(error._handle("@")).toBe(false);
    //   expect(error._handle("as@asf")).toBe(false);
    //   expect(error._handle("me@gmail.com")).toBe(false);
    // });
    //
    // test("Error prop's handle function returns true when value does not include @", () => {
    //   expect(error._handle("")).toBe(true);
    //   expect(error._handle("megmail.com")).toBe(true);
    // });
    //
    // test("Error prop's has message", () => {
    //   expect(error.message).toBe("Not a valid pasword");
    // });
    //
    // test("has correct label", () => {
    //   const tree = renderer.create(
    //     <Password />
    //   ).toJSON();
    //
    //   expect(tree).toMatchSnapshot();
    // });
  });
});