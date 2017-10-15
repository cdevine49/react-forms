import React from 'react';
import RadioGroup from '../../lib/components/radio/group';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components';

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
          <child className="child" value="child0" />
          <child className="child" value="child1" />
          <child className="child" value="child2" />
        </RadioGroup>
      );

      radioGroup.find('.child').forEach((child, i) => {
        test(`can be called by ${i}th child with its prop value`, () => {
          expect(onChange).toHaveBeenCalledTimes(i);
          child.props().onChange();
          expect(onChange).toHaveBeenCalledTimes(i + 1);
          expect(onChange).toHaveBeenLastCalledWith(child.props().value);
        });
      });
    });

    describe('OnKeyPress', () => {
      test('received by each child', () => {
        const tree = renderer.create(
          <RadioGroup>
            <child />
            <child />
            <child />
          </RadioGroup>
        ).toJSON();

        expect(tree).toMatchSnapshot();
      });

      describe('Left Arrow', () => {
        const onChange = jest.fn();
        const radioGroup = shallow(
          <RadioGroup onChange={onChange}>
            <child className="child" value="first" />
            <child className="child" value="second" />
            <child className="child" value="third" />
          </RadioGroup>
        );

        const children = radioGroup.find('.child');
        const e = { keyCode: 37 }

        children.forEach((child, i) => {
          switch (i) {
            case 0:
              test('OnChange prop called with last child\'s value', () => {
                child.props().onKeyPress(e);
                expect(onChange).toHaveBeenCalledTimes(i + 1)
                expect(onChange).toHaveBeenLastCalledWith(children.last().props().value);
              });
              break;
            default:
              test('OnChange called with previous child\'s value', () => {
                child.props().onKeyPress(e);
                expect(onChange).toHaveBeenCalledTimes(i + 1)
                expect(onChange).toHaveBeenLastCalledWith(children.at(i - 1).props().value);
              });
              break;
          }
        });
      });

      describe('Up Arrow', () => {
        const onChange = jest.fn();
        const radioGroup = shallow(
          <RadioGroup onChange={onChange}>
            <child className="child" value="first" />
            <child className="child" value="second" />
            <child className="child" value="third" />
          </RadioGroup>
        );

        const children = radioGroup.find('.child');
        const e = { keyCode: 38 }

        children.forEach((child, i) => {
          switch (i) {
            case 0:
              test('OnChange prop called with last child\'s value', () => {
                child.props().onKeyPress(e);
                expect(onChange).toHaveBeenCalledTimes(i + 1)
                expect(onChange).toHaveBeenLastCalledWith(children.last().props().value);
              });
              break;
            default:
              test('OnChange called with previous child\'s value', () => {
                child.props().onKeyPress(e);
                expect(onChange).toHaveBeenCalledTimes(i + 1)
                expect(onChange).toHaveBeenLastCalledWith(children.at(i - 1).props().value);
              });
              break;
          }
        });
      });

      describe('Right Arrow', () => {
        const onChange = jest.fn();
        const radioGroup = shallow(
          <RadioGroup onChange={onChange}>
            <child className="child" value="first" />
            <child className="child" value="second" />
            <child className="child" value="third" />
          </RadioGroup>
        );

        const children = radioGroup.find('.child');
        const e = { keyCode: 39 }

        children.forEach((child, i) => {
          switch (i) {
            case (children.length - 1):
              test('OnChange prop called with first child\'s value', () => {
                child.props().onKeyPress(e);
                expect(onChange).toHaveBeenCalledTimes(i + 1)
                expect(onChange).toHaveBeenLastCalledWith(children.first().props().value);
              });
              break;
            default:
              test('OnChange called with previous child\'s value', () => {
                child.props().onKeyPress(e);
                expect(onChange).toHaveBeenCalledTimes(i + 1)
                expect(onChange).toHaveBeenLastCalledWith(children.at(i + 1).props().value);
              });
              break;
          }
        });
      });

      describe('Down Arrow', () => {
        const onChange = jest.fn();
        const radioGroup = shallow(
          <RadioGroup onChange={onChange}>
            <child className="child" value="first" />
            <child className="child" value="second" />
            <child className="child" value="third" />
          </RadioGroup>
        );

        const children = radioGroup.find('.child');
        const e = { keyCode: 40 }

        children.forEach((child, i) => {
          switch (i) {
            case (children.length - 1):
              test('OnChange prop called with first child\'s value', () => {
                child.props().onKeyPress(e);
                expect(onChange).toHaveBeenCalledTimes(i + 1)
                expect(onChange).toHaveBeenLastCalledWith(children.first().props().value);
              });
              break;
            default:
              test('OnChange called with previous child\'s value', () => {
                child.props().onKeyPress(e);
                expect(onChange).toHaveBeenCalledTimes(i + 1)
                expect(onChange).toHaveBeenLastCalledWith(children.at(i + 1).props().value);
              });
              break;
          }
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