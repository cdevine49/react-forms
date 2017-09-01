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

  describe('FlagInput', () => {
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


    describe("Text Input", () => {
      test('receives props by default', () => {
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

      const flagfield = shallow(
        <FlagField />
      );

      const onBlur = jest.fn();
      const onFocus = jest.fn();
      const onChange = jest.fn();
      const root = flagfield.first().shallow();
      root.setProps({ onBlur, onFocus, onChange });
      const input = root.find('input');

      test("blur event calls onBlur prop", () => {
        expect(onBlur).not.toHaveBeenCalled();
        input.simulate('blur');
        expect(onBlur).toHaveBeenCalled();
      });

      test("focus event calls onFocus prop", () => {
        expect(onFocus).not.toHaveBeenCalled();
        input.simulate('focus');
        expect(onFocus).toHaveBeenCalled();
      });

      test('onChange event calls onChange prop with text input value', () => {
        const value = "First Last";
        const e = { target: { value } }

        expect(onChange).not.toHaveBeenCalled();
        input.simulate('change', e);
        expect(onChange).toHaveBeenCalledWith(e);
      });
    });
  });


  describe('Errors', () => {
    // Have to use enzyme because errorMessage is part of withErrors state
    const flagfield = shallow(
      <FlagField />
    );

    const root = flagfield.first().shallow();
    const errorMessage = "Whoopsie", id = 'my-error', dataKey = 12
    const errorProps = {id, 'data-key': dataKey}

    const error = root.childAt(2);
    test('does not render without errorMessage prop', () => {
      expect(error.props().children).toBe('');
    });

    describe('Given errorMessage prop', () => {
      root.setProps({ errorMessage });
      test('receives errorMessage prop as child', () => {
        const error = root.childAt(2);
        expect(error.props().children).toBe(errorMessage);
      });

      test('accepts errorProps', () => {
        root.setProps({ errorProps });

        const error = root.childAt(2);
        expect(error.props().id).toBe(id);
        expect(error.props()['data-key']).toBe(dataKey);
      });
    });
  });

  describe('Underline', () => {
    test('does not render without underline prop', () => {
      const tree = renderer.create(
        <FlagField
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    describe('Given underline prop', () => {
      test('renders with underline prop as child', () => {
        const tree = renderer.create(
          <FlagField
            underline="Show me"
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
      });

      test('accepts underlineProps', () => {
        const tree = renderer.create(
          <FlagField
            underline="Show me"
            underlineProps={{
              id: 'under-the-input',
              style: { display: 'flex' }
            }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
      });

    });
  });
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