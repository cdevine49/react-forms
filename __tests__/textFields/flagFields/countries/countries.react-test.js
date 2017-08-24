import React from 'react';
import Countries from '../../../../src/components/textFields/flagFields/countries';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe("Countries", () => {
  describe("Default", () => {
    test("renders search input and list of countries", () => {
      // Jest hates refs
      function createNodeMock(el) {
        if (el.type === 'ul') {
          const handler = {
            get: () => ({ offsetTop: 0 })
          };
          const children = new Proxy({}, handler);
          const obj = {
            children,
            clientHeight: 0,
            scrollHeight: 0,
            scrollTop: 0,
            addEventListener: function(){},
            removeEventListener: function(){}
          }
          return obj
        }
        return {
          focus() {}
        }
      };

      const tree = renderer.create(
        <Countries
          />,
        {createNodeMock}
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
  describe("Search", () => {
    test("Shows only countries that match search term from start of country name", () => {
      const component = shallow(
        <Countries />
      );
      component.setState({ query: 'united states'});
      expect(component.find('.countries').children().length).toBe(1);

      component.setState({ query: 'united states USA USA USA'});
      expect(component.find('.countries').children().length).toBe(0);

      component.setState({ query: 'al'});
      expect(component.find('.countries').children().length).toBe(2);
    });
  });
  describe("Country list elements", () => {
    const component = shallow(
      <Countries />
    );

    describe("Clicking", () => {
      test("Calls the onClick prop with countries index", () => {
        const onClick = jest.fn();
        component.setProps({ onClick });
        expect(onClick).not.toHaveBeenCalled();

        component.find('.countries').childAt(5).simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick).toHaveBeenCalledWith(5);

        component.find('.countries').childAt(12).simulate('click');
        expect(onClick).toHaveBeenCalledTimes(2);
        expect(onClick).toHaveBeenCalledWith(12);
      });

      test("Sets hovered state to false", () => {
        component.setState({ hovered: true })
        component.find('.countries').childAt(0).simulate('click');
        expect(component.state('hovered')).toBe(false);
      });
    });
  });
});