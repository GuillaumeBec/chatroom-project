import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = (state) => ({
  messages: state.chatroom.messages,
  stateAuthor: state.chatroom.author,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps)(Messages);
