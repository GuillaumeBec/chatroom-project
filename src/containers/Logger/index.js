import { connect } from 'react-redux';
import { toggle } from 'src/actions';
import Logger from 'src/components/Logger';

const mapStateToProps = (state) => ({
  open: state.chatroom.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggle: () => {
    // console.log('Je veux changer le toggle');
    dispatch(toggle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logger);
