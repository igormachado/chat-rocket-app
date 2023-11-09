import { styled } from "styled-components";

export const YourMessage = styled.p`
  display: flex;
  width: 880px;
  height: 66px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: 30px 72px;

  span {
    margin-top: 12px;
  }

  :first-child {
    width: 76px;
    height: 12px;
    margin-bottom: 10px;
    color: ${(props) => props.theme["gray-200"]};
    text-align: center;
    font-size: 12px;
    font-weight: 400;
  }

  :last-child {
    display: flex;
    padding: 14px;
    align-items: flex-start;
    gap: 10px;

    border-radius: 0px 8px 8px 8px;
    background: ${(props) => props.theme["purple-light"]};

    color: ${(props) => props.theme["gray-200"]};
    font-size: 16px;
    font-weight: 400;
  }
`;

export const FriendMessage = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  padding: 30px 72px;
  gap: 10px;

  span {
    margin-top: 12px;
  }

  :first-child {
    width: 67px;
    height: 12px;
    color: ${(props) => props.theme["gray-200"]};
    font-size: 12px;
    font-weight: 400;
  }

  :last-child {
    display: flex;
    padding: 14px;
    align-items: flex-start;
    gap: 10px;

    border-radius: 8px 8px 0px 8px;
    background: ${(props) => props.theme["green-dark"]};
    color: ${(props) => props.theme["gray-200"]};
    font-size: 16px;
    font-weight: 400;
  }
`;
