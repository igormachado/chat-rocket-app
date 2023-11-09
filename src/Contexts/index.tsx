import { createContext, useState } from "react";

interface ListMessageChat {
  id: number;
  profileName: string;
  message: string;
  datePost: string;
}

interface MessagesContextType {
  messagePost: string;
  setMessagePost: React.Dispatch<React.SetStateAction<string>>;

  allMessagePost: ListMessageChat[];
  setAllMessagePost: React.Dispatch<React.SetStateAction<ListMessageChat[]>>;

  friendMessage: string;
  setFriendMessage: React.Dispatch<React.SetStateAction<string>>;

  allMessageFriend: string[];
  setAllMessageFriend: React.Dispatch<React.SetStateAction<string[]>>;
}

interface ChildrenPropsTypes {
  children: ReactNode;
}

export const MessagesChat = createContext({} as MessagesContextType);

export function MessagesChatProvider({ children }: ChildrenPropsTypes) {
  const [messagePost, setMessagePost] = useState("");
  const [allMessagePost, setAllMessagePost] = useState<ListMessageChat[]>([]);
  const [friendMessage, setFriendMessage] = useState("");
  const [allMessageFriend, setAllMessageFriend] = useState<string[]>([]);

  return (
    <MessagesChat.Provider
      value={{
        messagePost,
        setMessagePost,
        allMessagePost,
        setAllMessagePost,
        friendMessage,
        setFriendMessage,
        allMessageFriend,
        setAllMessageFriend,
      }}
    >
      {children}
    </MessagesChat.Provider>
  );
}
