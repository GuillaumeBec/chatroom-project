import {
  TOGGLE,
  CHANGE,
  CHANGE_MESSAGE_VALUE,
  ADD_MESSAGE,
} from 'src/actions';

const initialState = {
  open: false,
  messageValue: '',
  author: 'Mr Flantier',
  messages: [
    {
      author: 'Serge',
      content: 'Salut Pierrot !',
      date: '14/07 - 12h23',
      id: 1,
    },
    {
      author: 'Pierrot',
      content: 'Mais c\'est ce bon vieux Serge !',
      date: '14/07 - 13h58',
      id: 2,
    },
  ],
};

const chatroom = (state = initialState, action = {}) => {
  // console.log('je passe dans le reducer', state);
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CHANGE_MESSAGE_VALUE:
      // console.log('je passe dans le reducer', action),
      return {
        ...state,
        messageValue: action.messageValue,
      };
    case ADD_MESSAGE: {
      const newMessages = [...state.messages];
      const today = new Date();
      const newMessageDate = `${today.getMonth() + 1}-${today.getDate()} / ${today.getHours()}:${today.getMinutes()}`;
      const newMessage = {
        author: state.author,
        content: state.messageValue,
        date: newMessageDate,
        id: 2,
      };
      newMessages.push(newMessage);
      return {
        ...state,
        messageValue: '',
        messages: newMessages,
      };
    }
    default:
      return state;
  }
};

export default chatroom;
