import React from 'react';
import Country from '../../../../lib/components/textFields/flagFields/countries/country';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

describe("Country", () => {
  describe("Without Props", () => {
    test("renders empty flag", () => {
      const tree = renderer.create(
        <Country />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe("With Props", () => {
    test("offset", () => {
      const tree = renderer.create(
        <Country offset="-44px" />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test("name", () => {
      const tree = renderer.create(
        <Country name="United States" />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test("value", () => {
      const tree = renderer.create(
        <Country value="+1" />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test("className", () => {
      const tree = renderer.create(
        <Country className="test" />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test("onClick", () => {
      const onClick = jest.fn();
      const component = mount(
        <Country onClick={onClick} />
      );
      expect(onClick.mock.calls.length).toBe(0);
      component.find('button').simulate('click');
      expect(onClick.mock.calls.length).toBe(1);
    });
  });
});