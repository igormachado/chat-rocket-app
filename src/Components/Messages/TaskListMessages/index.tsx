import { FriendMessage, YourMessage } from "./styles";


export function TaskListMessages({ allMessagePost }) {
  return (
    <>
      {allMessagePost.map((item) =>
        item.profileName === "Celi" ? (
          <>
            {" "}
            <YourMessage>
              <span>
                {item.profileName} - {item.datePost}
              </span>
              <span>{item.message}</span>
            </YourMessage>
          </>
        ) : (
          <FriendMessage>
            <span>
              {item.profileName} - {item.datePost}
            </span>
            <span>{item.message}</span>
          </FriendMessage>
        )
      )}
    </>
  );
}
