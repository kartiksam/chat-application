import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { allUserRoute } from "../utils/ApiRoutes";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import ChatContainer from "../components/ChatContainer";
const Chat = () => {
  // these are fragments <></>
  const [currentChat, setCurrentChat] = useState(undefined);
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  // no btn to call api useeffect whwn page loads auto gets call
  useEffect(() => {
    const fetchUser = async () => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        const user = await JSON.parse(localStorage.getItem("chat-app-user"));
        setCurrentUser(user);
        setIsLoaded(true);
      }
    };

    fetchUser();
  }, [navigate]);

  useEffect(() => {
    const fetchContacts = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const { data } = await axios.get(
            `${allUserRoute}/${currentUser._id}`
          );
          setContacts(data);
        } else {
          navigate("/setAvatar");
        }
      }
    };

    fetchContacts();
  }, [currentUser, navigate]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <Container>
      <div className="container">
        <Contacts
          contacts={contacts}
          currentUser={currentUser}
          changeChat={handleChatChange}
        ></Contacts>
        {/* conditional rendering */}
        {isLoaded && currentChat === undefined ? (
          <Welcome currentUser={currentUser} />
        ) : (
          <ChatContainer
            currentChat={currentChat}
            currentUser={currentUser}
          ></ChatContainer>
        )}
      </div>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
export default Chat;
