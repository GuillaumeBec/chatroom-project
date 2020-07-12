// == Import npm
import React from 'react';
import Infos from 'src/components/Infos';
import Logger from 'src/components/Logger';
import Messages from 'src/components/Messages';
import WriteMessage from 'src/components/WriteMessage';
// == Import

// == Composant
const Chatroom = () => (
  <div className="Chatroom">
    <h1>Composant : Chatroom</h1>
    <Logger />
    <Infos />
    <Messages />
    <WriteMessage />
  </div>
);

// == Export
export default Chatroom;
