import styled from 'styled-components';

const Input = styled.input`
  background: #FFFFFF;
  line-height: 20px;
  vertical-align: middle;
  padding: 6px 8px;
  color: #222;
  vertical-align: middle;
  border: 1px solid #ddd;
  border-radius: 3px 3px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);
  background-repeat: no-repeat;
  background-position: right 8px center;
  outline: none;

  &:hover {
    border-color: #b9b9b9;
    border-top-color: #a0a0a0;
  }

  &:focus {
    border-color: #4d90fe;
  }
  border-color: ${props => (props.error && '#dd4b39') || (props.focus && '#dd4b39')};
`;

export default Input;