import React from 'react';
import FlagField from '../../../src/components/textFields/flagFields';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe("FlagField", () => {
  test('Default', () => {
    const tree = renderer.create(
      <FlagField
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('props populate the input tag', () => {
    const tree = renderer.create(
      <FlagField
        id="test-input"
        className="test-class another class"
        value="Can set a default value"
        type="email"
        onChange={jest.fn()}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('FieldProps', () => {
    const tree = renderer.create(
      <FlagField
        fieldProps={{
          id: "test-field",
          className: "field-class hey what-it-is",
          onClick: jest.fn()
        }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('Label', () => {
    test("'label' prop passed to Label as child", () => {
      const tree = renderer.create(
        <FlagField
          label="I exist"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test("id prop becomes htmlFor", () => {
      const tree = renderer.create(
        <FlagField
          id="connects input and label"
          label="Hi"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('LabelProps', () => {
      const tree = renderer.create(
        <FlagField
          label="I exist"
          labelProps={{
            id: "test-label",
            className: "i am a label"
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  test('inputContainerProps', () => {
    const tree = renderer.create(
      <FlagField
        inputContainerProps={{
          id: "test-input",
          className: "test-class another class",
          onMouseDown: jest.fn()
        }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  // test('ErrorProps', () => {
  //   const tree = renderer.create(
  //     <FlagField
  //       errorMessage="I exist too"
  //       errorProps={{
  //         id: "whoopsie",
  //         className: "way to go you jerk"
  //       }}
  //       />
  //   ).toJSON();
  //
  //   expect(tree).toMatchSnapshot();
  // });
  //
  // test('UnderlineProps', () => {
  //   const tree = renderer.create(
  //     <FlagField
  //       id="test-input"
  //       className="test-class another class"
  //       value="Can set a default value"
  //       type="email"
  //       onChange={jest.fn()}
  //       />
  //   ).toJSON();
  // });
});