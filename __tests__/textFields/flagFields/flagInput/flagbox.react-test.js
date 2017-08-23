import React from 'react';
import Flagbox from '../../../../src/components/textFields/flagFields/flagInput/flagbox';
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
    test('Only renders when selecting country', () => {
      const component = shallow(
        <Flagbox />
      );

      expect(component.children().length).toBe(1);
      component.setState({ selectingCountry: true });
      expect(component.children().length).toBe(2);
      component.setState({ selectingCountry: false });
      expect(component.children().length).toBe(1);
    });

    describe("Selecting country", () => {
      test("Sets selectingCountry to false", () => {

      });

      test("Calls onChange prop with the country index", () => {

      });
    })
  });
});