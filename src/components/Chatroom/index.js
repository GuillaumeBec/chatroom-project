// == Import npm
import React from 'react';
import Infos from 'src/components/Infos';
import Logger from 'src/containers/Logger';
import Messages from 'src/components/Messages';
import WriteMessage from 'src/components/WriteMessage';
// == Import
import './style.scss';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Logger />
    <Infos />
    <Messages />
    <WriteMessage />
  </div>
);

// == Export
export default Chatroom;
