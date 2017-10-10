import React from 'react';
import TextInput from '../src/components/textInput';
import renderer from 'react-test-renderer';

describe('TextInput', () => {
  test('default', () => {
    const tree = renderer.create(
      <TextInput />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('containerProps', () => {
    const tree = renderer.create(
      <TextInput
        containerProps={{
          id: 'container',
          className: 'classy react',
          style: { margin: "10px" }
        }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('label', () => {
    const tree = renderer.create(
      <TextInput
        label="Child/Text"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('id', () => {
    const tree = renderer.create(
      <TextInput
        id="first-name"
        label="First Name"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('labelProps', () => {
    const tree = renderer.create(
      <TextInput
        label="Last Name"
        labelProps={{
          id: 'my-label',
          className: 'right large name',
          style: { fontSize: "16px" }
        }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('className', () => {
    const tree = renderer.create(
      <TextInput
        className="big and fat"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('required', () => {
    const tree = renderer.create(
      <TextInput
        label="Gets an Asterisk"
        required={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('errorMessage', () => {
    const tree = renderer.create(
      <TextInput
        className="not overridden"
        errorMessage="Ya dun goofed"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('errorProps', () => {
    const tree = renderer.create(
      <TextInput
        errorMessage="Uh oh"
        errorProps={{
          id: 'error-tag',
          className: 'more classes',
          'data-message': 'hi there'
        }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('underline', () => {
    const tree = renderer.create(
      <TextInput
        underline="More explanation"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('underlineProps', () => {
    const tree = renderer.create(
      <TextInput
        underline="Fill this in because ..."
        underlineProps={{
          id: "underline-tag",
          className: 'help explain',
          style: { background: 'blue' }
        }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('other props', () => {
    const tree = renderer.create(
      <TextInput
        onFocus={jest.fn()}
        style={{ padding: "25px 15px" }}
        data-key="input-key"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('aria-describedby', () => {
    test('accepts both error id and underline id', () => {
      const tree = renderer.create(
        <TextInput
          errorProps={{
            id: 'error-id'
          }}
          underlineProps={{
            id: 'underline-id'
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});