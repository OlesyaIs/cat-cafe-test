import styled from "styled-components";

const Form = styled.form`
  width: ${(props) => props.$width}px;
  padding: 40px;
  display: block;
  position: relative;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 20px;
`;

export default Form;
