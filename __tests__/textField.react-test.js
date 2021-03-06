import React from 'react';
import Container from '../lib/components/textField';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('', () => {
  expect(1).toBe(1);
});
//
// describe("Container", () => {
//
//   const onChange = jest.fn();
//
//   test('props populate the input tag', () => {
//     const tree = renderer.create(
//       <Container
//         id="test-input"
//         className="test-class another class"
//         value="Can set a default value"
//         type="email"
//         onChange={onChange}
//         />
//     ).toJSON();
//
//     expect(tree).toMatchSnapshot();
//   });
//
//   describe("errorMessage prop", () => {
//     const message = "Shock horror";
//
//     describe("when error handler return true", () => {
//       const container = shallow(
//         <Container
//           errors={[{ _handle: () => true, message }]}
//           />
//       );
//       const input = container.first().shallow().find('input');
//
//       test("initializes as empty string", () => {
//         expect(container.props().errorMessage).toBe('');
//       });
//
//       test("equals message on input blur", () => {
//         input.simulate('blur');
//         expect(container.props().errorMessage).toBe(message);
//       });
//
//       test("is empty string on input focused", () => {
//         input.simulate('focus');
//         expect(container.props().errorMessage).toBe('');
//       });
//     })
//
//     describe("when error handler returns false", () => {
//       const container = shallow(
//         <Container
//           errors={[{ _handle: () => false, message }]}
//           />
//       );
//       const input = container.first().shallow().find('input');
//
//       test("initializes as empty string", () => {
//         expect(container.props().errorMessage).toBe('');
//       });
//
//       test("stays empty string on blur", () => {
//         input.simulate('blur');
//         expect(container.props().errorMessage).toBe('');
//       });
//
//       test("stays empty string on input focus", () => {
//         input.simulate('focus');
//         expect(container.props().errorMessage).toBe('');
//       });
//     });
//   });
//
//   describe("Underline", () => {
//     test("renders when passed as prop", () => {
//       const tree = renderer.create(
//         <Container
//           underline="More info about input"
//           />
//       ).toJSON();
//
//       expect(tree).toMatchSnapshot();
//     });
//
//     test("accepts underlineProps", () => {
//       const tree = renderer.create(
//         <Container
//           underline="More info about input"
//           underlineProps={{
//             id: "underline",
//             className: "new-class test"
//           }}
//           />
//       ).toJSON();
//
//       expect(tree).toMatchSnapshot();
//     });
//   });
// });
//
// //
// //
// //
// //
// //
// //
// //
// //
// // //
// //
