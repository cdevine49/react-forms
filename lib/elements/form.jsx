import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
`;

export default Form;

Form.defaultProps = {
  onSubmit: () => {}
}