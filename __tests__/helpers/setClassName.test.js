import setClassName from '../../lib/helpers/setClassName';
const dfault = "default";

test('ignores false elements', () => {
  expect(setClassName([dfault])).toBe("default");
  expect(setClassName([dfault, undefined])).toBe("default");
  expect(setClassName([dfault, undefined, false, ''])).toBe("default");
});

test('joins truthy arguments', () => {
  const extras = "extra secondary";
  expect(setClassName([dfault, extras])).toBe("default extra secondary");
  const more = "more additional"
  expect(setClassName([dfault, extras, more])).toBe("default extra secondary more additional");
  expect(setClassName([dfault, extras, undefined, more, false])).toBe("default extra secondary more additional");
});