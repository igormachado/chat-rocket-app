
import { useContext } from "react";
import { TaskListMessages } from "../Messages/TaskListMessages";
import { AddMessages} from "../Messages/AddMessage";
import { MessagesChat } from "../../Contexts";




export function Main() {
  const { allMessagePost, messagePost, setAllMessagePost } =
    useContext(MessagesChat);

  const dateTime = new Date();

  let nextId: number = 1;

  const dateTimeMessage = dateTime.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  function handleAddMessage() {
    setAllMessagePost([
      ...allMessagePost,
      {
        id: nextId++,
        message: messagePost,
        profileName: "Celi",
        datePost: dateTimeMessage,
      },
    ]);
  }
  console.log(allMessagePost.map(item => item.id))
  return (
    <>
      <TaskListMessages allMessagePost={allMessagePost} />
      <AddMessages onAddMessage={handleAddMessage} />
    </>
  );
}
