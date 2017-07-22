import React from 'react';
import Container from '../src/components/container';
import renderer from 'react-test-renderer';

describe("Container", () => {
  test('renders with default props', () => {
    const tree = renderer.create(
      <Container
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  const onChange = jest.fn();

  test('props populate the input tag', () => {
    const tree = renderer.create(
      <Container
        id="test-input"
        className="test-class another class"
        value="Can set a default value"
        type="email"
        onChange={onChange}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders with props from containerProps object", () => {
    const tree = renderer.create(
      <Container
        containerProps={{
          id: 'container',
          className: 'classy react',
          style: { margin: "10px" }
        }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

//
//
//
//
//
//
//
//
// //
//
