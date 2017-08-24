import React from 'react';
import Flagbox from '../../../../src/components/textFields/flagFields/flagInput/flagbox';
import Countries from '../../../../src/components/textFields/flagFields/countries';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe("Flagbox", () => {
  test("Without Props", () => {
    const tree = renderer.create(
      <Flagbox />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("CountryIndex", () => {
    let tree = renderer.create(
      <Flagbox countryIndex={5} />
    ).toJSON();

    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Flagbox countryIndex={10} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Flag button toggles selectingCountry", () => {
    const component = shallow(
      <Flagbox />
    );
    const button = component.find('button');
    const click = () => button.simulate('click');

    expect((component).state('selectingCountry')).toBe(false);
    click();
    expect((component).state('selectingCountry')).toBe(true);
    const j = Math.round(Math.random() * 10);
    for (let i = 0; i < j; i++) { click() }
    expect((component).state('selectingCountry')).toBe(j % 2 === 0);
  });

  describe("Countries", () => {
    const component = shallow(
      <Flagbox />
    );

    test.only('Only renders when selecting country', () => {
      expect(component.children().length).toBe(1);
      component.setState({ selectingCountry: true });
      expect(component.children().length).toBe(2);
      component.setState({ selectingCountry: false });
      expect(component.children().length).toBe(1);
    });

    describe("OnClick Prop", () => {
      const component = shallow(
        <Flagbox />
      );
      component.setState({ selectingCountry: true });

      test("Sets selectingCountry to false", () => {
        const countries = component.find(Countries);
        countries.props().onClick();
        expect(component.state('selectingCountry')).toBe(false);
      });

      test("Calls onChange prop with the country index", () => {
        const onChange = jest.fn();
        component.setProps({ onChange });
        const countries = component.find(Countries);
        expect(onChange).not.toHaveBeenCalled()

        countries.props().onClick(10);
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith(10)

        countries.props().onClick(23);
        expect(onChange).toHaveBeenCalledTimes(2)
        expect(onChange).toHaveBeenCalledWith(23)
      });
    })
  });
});