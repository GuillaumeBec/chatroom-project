import { connect } from 'react-redux';
import {
  changeMessageValue,
  addMessage,
} from 'src/actions';

import WriteMessage from 'src/components/WriteMessage';

const mapStateToProps = (state) => ({
  messageValue: state.messageValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeMessageValue: (messageValue) => {
    // console.log('je veux changer la valeur du state par', messageValue);
    dispatch(changeMessageValue(messageValue));
  },
  addMessage: (message) => {
    dispatch(addMessage(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WriteMessage);
