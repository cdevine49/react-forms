import React from 'react';
import Container from '../src/components/container';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { shallow, render, mount } from 'enzyme';


test('Renders with default props', () => {
  const tree = renderer.create(
    <Container
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

const onChange = jest.fn();

test('Props on container populate the input tag', () => {
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

describe("Container", () => {
  test("Renders with props from containerProps", () => {
    let tree = renderer.create(
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
})

describe("Label", () => {
  test("does not render if label prop is falsey", () => {
    const tree = renderer.create(
      <Container
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("prop on container becomes label text", () => {
    const tree = renderer.create(
      <Container
        label="Test Label"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("receives props from container's labelProps prop", () => {
    const tree = renderer.create(
      <Container
        label="Test Label"
        labelProps={{
          id: "labelId",
          className:"label-class test"
        }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
})

describe("Errors", () => {
  const message = "Shock horror";
  const errors = [{ _handle: () => true, message }];

  test("No errors before input blurred", () => {
    const wrapper = mount(
      <Container
        errors={errors}
        />
    );
    const input = wrapper.find('input');
    expect(wrapper.find('span').exists()).toBe(false);
    input.simulate('blur');
    expect(wrapper.find('span').exists()).toBe(true);
  });

  test("No errors when container props do not include errors or required", () => {
    const wrapper = mount(
      <Container
        />
    );
    const input = wrapper.find('input');
    input.simulate('blur');
    expect(wrapper.find('span').exists()).toBe(false);
  });

  test("When container props include errors", () => {
    const wrapper = mount(
      <Container
        errors={errors}
        />
    );
    const input = wrapper.find('input');
    input.simulate('blur');
    expect(wrapper.find('span').text()).toBe(message);
  });

  describe("Required", () => {
    let wrapper, input;
    beforeEach(() => {
      wrapper = mount(
        <Container
          required={true}
          />
      );
      input = wrapper.find('input');
    })

    test("When container has value, no error message appears", () => {
      wrapper.setProps({ value: 'string' });
      input.simulate('blur');
      expect(wrapper.find('span').exists()).toBe(false);
    });

    test("When container has no value, error message appears", () => {
      input.simulate('blur');
      expect(wrapper.find('span').text()).toBe("You can't leave this empty");
    });
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
