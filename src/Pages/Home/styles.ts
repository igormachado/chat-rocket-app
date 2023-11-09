import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 1024px;
  padding: 32px 72px;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  border-radius: 8px 8px 0px 0px;
  background: ${(props) => props.theme["gray-400"]};
`;
