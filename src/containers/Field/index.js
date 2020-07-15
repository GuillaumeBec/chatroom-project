import { connect } from 'react-redux';
import { change } from 'src/actions';

import Field from 'src/components/Logger/Field';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.id],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setValue: (value) => {
    dispatch(change(ownProps.id, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
