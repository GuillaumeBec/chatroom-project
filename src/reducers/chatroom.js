import {
  TOGGLE,
  CHANGE,
  CHANGE_MESSAGE_VALUE,
} from 'src/actions';

const initialState = {
  open: false,
  messageValue: '',
  messages: [],
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
    default:
      return state;
  }
};

export default chatroom;
