import React from "react";
import styled from "styled-components";
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import Message from "./Message";
const ChatContainer = ({ currentChat }) => {
  const handleSendMsg = async (msg) => {
    alert(msg);
  };
  return (
    <>
      {currentChat && (
        <Container>
          {/* three things neeeded headeer container chat inputn   */}
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                  alt="avatar"
                />
              </div>
              <div className="username">
                <h3>{currentChat.username}</h3>
              </div>
              <Logout></Logout>
            </div>
          </div>
          <Message />
          <ChatInput handleSendMsg={handleSendMsg} />
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e1e2e;
  height: 100vh;
  width: 100%;
  padding: 1rem;

  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #333;
  }

  .user-details {
    display: flex;
    align-items: center;
    gap: 1rem;

    .avatar img {
      height: 3rem;
    }

    .username h3 {
      color: white;
    }
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 1rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
  }
`;
export default ChatContainer;
