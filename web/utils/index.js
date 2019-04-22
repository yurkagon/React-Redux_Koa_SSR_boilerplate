import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const withInitialLoading = Component =>
  connect(
    null,
    (dispatch, props) => bindActionCreators({
      initialLoad: props.initialLoad
    }, dispatch)
  )(Component)
