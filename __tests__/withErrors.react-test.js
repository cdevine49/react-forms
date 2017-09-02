import React from 'react';
import withErrors from '../src/components/withErrors'
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

describe('WithErrors', () => {
  let Root, wrapper, WrappedComponent, message = 'test message';
  beforeEach(() => {
    Root = () => {
      return (
        <div id="root" className="return element"></div>
      );
    }
    WrappedComponent = withErrors(Root);
    wrapper = shallow(<WrappedComponent errors={[{_handle: () => true, message}]} />);
  });

  it('renders the passed component as its root element', () => {
    const tree = renderer.create(
      <WrappedComponent
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('passes errorMessage state as prop to its root element', () => {
    const message = 'test message';
    expect(wrapper.first().props().errorMessage).toBe('');
    wrapper.setState({ errorMessage: message });
    expect(wrapper.first().props().errorMessage).toBe(message);
  });

  it('passes hideErrors and displayErrors functions as props to its root element', () => {
    expect(typeof wrapper.first().props().hideErrors).toBe('function');
    expect(typeof wrapper.first().props().displayErrors).toBe('function');
  });

  it('sets errorMessage to message of error that needs handing onBlur', () => {
    wrapper.first().props().displayErrors();
    expect(wrapper.first().props().errorMessage).toBe(message);
  });

  it('sets errorMessage to empty onFocus', () => {
    wrapper.setState({ errorMessage: message });
    wrapper.first().props().hideErrors();
    expect(wrapper.first().props().errorMessage).toBe('');
  });
});