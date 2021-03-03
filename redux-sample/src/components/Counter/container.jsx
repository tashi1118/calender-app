import { connect } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = dispatch => ({
  increment: count => {
    console.log('dispatch')
    console.log(dispatch)
    console.log(count)
    dispatch(increment(count));
  },
  decrement: count => {
    console.log('dispatch')
    console.log(dispatch)
    console.log(count)
    dispatch(decrement(count));
  }
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(Counter);
