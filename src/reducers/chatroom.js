import { TOGGLE,
  CHANGE,
} from 'src/actions';

const initialState = {
  open: false,
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
    default:
      return state;
  }
};

export default chatroom;
