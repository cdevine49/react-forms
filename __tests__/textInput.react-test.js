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

  describe('ContainerProps', () => {
    test('populate the container tag', () => {
      const tree = renderer.create(
        <TextInput
          containerProps={{
            id: 'container',
            style: { margin: "10px" }
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('className added to container tag\'s default classes', () => {
      const tree = renderer.create(
        <TextInput
          containerProps={{
            className: 'classy react',
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Label', () => {
    test('label prop acts as child', () => {
      const tree = renderer.create(
        <TextInput
          label="Text Input"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('htmlFor populated by id prop', () => {
      const tree = renderer.create(
        <TextInput
          id="first-name"
          label="First Name"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('labelProps populate the label tag', () => {
      const tree = renderer.create(
        <TextInput
          label="Last Name"
          labelProps={{
            id: 'my-label',
            className: 'last name label',
            style: { fontSize: "16px" }
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Input', () => {
    test('receives props by default', () => {
      const tree = renderer.create(
        <TextInput
          id="my-input"
          className="big and fat"
          style={{ padding: "25px 15px" }}
          data-key="input-key"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('receives \'error\' class and aria-invalid when errorMessage prop is truthy', () => {
      let tree = renderer.create(
        <TextInput
          errorMessage={true}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();

      tree = renderer.create(
        <TextInput
          className="big and fat"
          errorMessage="Ya dun goofed"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();

      tree = renderer.create(
        <TextInput
          errorMessage=""
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('receives aria-required when required', () => {
      const tree = renderer.create(
        <TextInput
          required={true}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    describe('aria-describedby', () => {
      test('receives underlineProps.id', () => {
        const tree = renderer.create(
          <TextInput
            underlineProps={{
              id: "descriptor"
            }}
            ariaDescribedby="secondary"
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
      });

      test('receives errorProps.id', () => {
        const tree = renderer.create(
          <TextInput
            errorProps={{ id: "error-description" }}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
      })
    });
  });

  describe('Error', () => {
    test('errorMessage acts as child prop', () => {
      const tree = renderer.create(
        <TextInput
          errorMessage="Uh oh"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('errorProps populate the error tag', () => {
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
  });

  describe('Underline', () => {
    test('underline acts as child prop', () => {
      const tree = renderer.create(
        <TextInput
          underline="More explanation"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('underlineProps populate the underline tag', () => {
      const tree = renderer.create(
        <TextInput
          underline="Fill this in because ..."
          underlineProps={{
            className: 'help explain',
            style: { background: 'blue' }
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    describe('id', () => {
      test('defaults to underlineProps.id', () => {
        const tree = renderer.create(
          <TextInput
            underline="More info"
            underlineProps={{
              id: "descriptor"
            }}
            ariaDescribedby="secondary"
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
      });

      test('will accept ariaDescribedby prop as a fallback', () => {
        const tree = renderer.create(
          <TextInput
            underline="Extra info"
            ariaDescribedby="secondary"
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});