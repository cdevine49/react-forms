import styled from 'styled-components';

export const Button = styled.button``;

export const Submit = Button.extend.attrs({
  type: 'submit'
})`
  align-self: flex-start;
  padding: 6px 12px;
  line-height: 20px;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.15);
  background-color: #6cc644;
  background-image: linear-gradient(#91dd70, #55ae2e);
  border: 1px solid #5aad35;
  border-radius: 3px;
`;

Submit.defaultProps = {
  children: 'Submit'
}