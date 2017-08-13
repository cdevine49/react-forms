import React from 'react';
import countries from '../../../../src/components/textFields/flagFields/shared/countries';
import renderer from 'react-test-renderer';

describe('countries', () => {
  test('is an array', () => {
    expect(countries.constructor).toBe(Array);
  });

  test('each element of the array is an array', () => {
    expect(countries.every(el => el.constructor === Array)).toBe(true);
  });

  test('each subarray has three elements', () => {
    expect(countries.every(el => el.length === 3)).toBe(true);
  });
});