import React from 'react';
import Form from '../../lib/elements/form';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

test("renders with default props", () => {
  const tree = renderer.create(
    <Form
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test("accepts props", () => {
  const tree = renderer.create(
    <Form
      id="formId"
      className="new-class"
      noValidate
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});