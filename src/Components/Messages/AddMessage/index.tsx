import { useContext } from "react";

import { MessagesChat } from "../../../Contexts";
import { PaperPlaneRight } from "@phosphor-icons/react";
import { Footer } from "./styles";

export function AddMessages({ onAddMessage }) {
  const { messagePost, setMessagePost } = useContext(MessagesChat);

  function handleMessagePost(e) {
    setMessagePost(e.target.value);
  }

  function handleSubmitMessage(e) {
    e.preventDefault();
    onAddMessage(messagePost);
    setMessagePost("");
  }

  return (
    <>
      <Footer>
       <p>
       <input
          type="text"
          value={messagePost}
          onChange={handleMessagePost}
          placeholder="Digite a mesagem"
        />
       
       <button onClick={handleSubmitMessage}>
          <PaperPlaneRight />
        </button>
       </p>
       
      </Footer>
    </>
  );
}
