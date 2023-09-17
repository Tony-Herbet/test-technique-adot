import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import App  from '../App';
import { handleLoading, saveDestinations } from '../actions/actionCreators';
import { Destinations, State } from '../types';
import { FunctionComponent } from 'react';

// === mapStateToProps
const mapStateToProps = (state: State) => ({
  destinations: state.destinations.destinations,
  loading: state.utils.loading,
  isFormOpen: state.utils.isFormOpen
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  saveDestinations: (destinations: Destinations) => {
    dispatch(saveDestinations(destinations))
  },
  handleLoading: () => {
    dispatch(handleLoading())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App as FunctionComponent);