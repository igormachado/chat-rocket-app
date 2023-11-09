import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px 72px;
  align-self: stretch;
  width: 880px;
  height: 48px;
`;

export const HeaderContent = styled.main`
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: stretch;

  img {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }
  nav {
    display: flex;
    flex-direction: row;
    width: 780px;
    height: 37px;
    gap: 4px;
    flex: 1 0 0;
  }

  p {
    margin-left: 12px;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme["gray-200"]};
  }
`;

export const AvatarName = styled.span`
  display: flex;
  color: ${(props) => props.theme["gray-200"]};
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

export const AvatarStatus = styled.span`
  display: flex;

  color: ${(props) => props.theme["gree-light"]};
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before {
    gap: 0.5rem;
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: ${(props) => props.theme["gree-light"]};
  }
`;

export const FooterHeader = styled.footer`
  display: flex;
  color: ${(props) => props.theme["gray-200"]};
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  margin-top: 16px;
`;
