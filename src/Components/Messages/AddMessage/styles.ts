import { styled } from "styled-components";


export const Footer = styled.footer`
  display: flex;
  padding-top: 25px;
  margin: 30px;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;
  margin-top: 100px;
  width: 800px;
  height: 52px;

  p {
    display: flex;
    padding: 14px 24px;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border-radius: 999px;
    background: ${(props) => props.theme["gray-300"]};
  }

  input {
    flex: 1 0 0;
    border: none;
    color: ${(props) => props.theme["gray-200"]};
    font-size: 16px;
    font-weight: 400;

    background: ${(props) => props.theme["gray-300"]};
    cursor: pointer;
  }

  button {
    background: ${(props) => props.theme["gray-300"]};
    border: none;
    cursor: pointer;

    svg {
      width: 32px;
      height: 20px;
      color: ${(props) => props.theme["gray-200"]};
    }
  }
`;
