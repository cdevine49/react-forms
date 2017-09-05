import React from 'react';
import RadioGroup from '../../src/components/radio/group';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('RadioGroup', () => {
  test('Default', () => {
    const tree = renderer.create(
      <RadioGroup
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('Fieldset', () => {
    test('accepts props by default', () => {
      const tree = renderer.create(
        <RadioGroup
          id='field-radio'
          className='add-me'
          data-test='some data'
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

  });

  describe('Legend', () => {
    test('doesn\'t render without legend prop', () => {
      const tree = renderer.create(
        <RadioGroup
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('accepts legend prop as child', () => {
      const tree = renderer.create(
        <RadioGroup
          legend="Keep this short"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('accepts legendProps object as props', () => {
      const tree = renderer.create(
        <RadioGroup
          legend="Legend name"
          legendProps={{
            id: 'legend-id',
            className: 'extra classes'
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Children', () => {
    const child = ({ props }) => <div { ...props }></div>;

    test('default props', () => {
      const tree = renderer.create(
        <RadioGroup>
          <child />
          <child />
          <child />
        </RadioGroup>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
    test('Child with value prop equal to group\'s currentValue prop is checked', () => {
      let tree = renderer.create(
        <RadioGroup currentValue={1}>
          <child value={0} />
          <child value={1} />
          <child value={2} />
        </RadioGroup>
      ).toJSON();

      expect(tree).toMatchSnapshot();

      tree = renderer.create(
        <RadioGroup currentValue={2}>
          <child value={0} />
          <child value={1} />
          <child value={2} />
        </RadioGroup>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    describe('OnChange', () => {
      const onChange = jest.fn();
      test('received by each child', () => {
        const tree = renderer.create(
          <RadioGroup onChange={onChange}>
            <child />
            <child />
            <child />
          </RadioGroup>
        ).toJSON();

        expect(tree).toMatchSnapshot();
      });

      const radioGroup = shallow(
        <RadioGroup onChange={onChange}>
          <child className="child" />
          <child className="child" />
          <child className="child" />
        </RadioGroup>
      );
      let calledCount = 0;
      radioGroup.find('.child').forEach(child => {
        test('can be called by each child', () => {
          expect(onChange).toHaveBeenCalledTimes(calledCount);
          child.props().onChange();
          calledCount++;
          expect(onChange).toHaveBeenCalledTimes(calledCount);
        });
      });
    });
  });

  describe('Error', () => {
    test('doesn\'t render without errorMessage prop', () => {
      const tree = renderer.create(
        <RadioGroup
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('accepts errorMessage prop as child', () => {
      const tree = renderer.create(
        <RadioGroup
          errorMessage="Whoopsie"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('accepts errorProps object as props', () => {
      const tree = renderer.create(
        <RadioGroup
          errorMessage="Uh Oh"
          errorProps={{
            id: 'ya-dun-goofed',
            className: 'way to go buddy'
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('Underline', () => {
    test('doesn\'t render without underline prop', () => {
      const tree = renderer.create(
        <RadioGroup
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('accepts underline prop as child', () => {
      const tree = renderer.create(
        <RadioGroup
          underline="A bit of extra explanation"
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('accepts underlineProps object as props', () => {
      const tree = renderer.create(
        <RadioGroup
          underline="More info"
          underlineProps={{
            id: 'what-is-going-on',
            className: 'i am here to help'
          }}
          />
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});