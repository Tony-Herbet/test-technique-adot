import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import App  from '../App';
import { handleFormOpeningClosing, handleLoading, saveDestinations, saveDestinationForm } from '../actions/actionCreators';
import { Destination, Destinations, State } from '../types';
import { FunctionComponent } from 'react';

// === mapStateToProps
const mapStateToProps = (state: State) => ({
  destinations: state.destinations.destinations,
  loading: state.utils.loading,
  isFormOpen: state.form.isFormOpen
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  saveDestinations: (destinations: Destinations) => {
    dispatch(saveDestinations(destinations))
  },
  handleLoading: () => {
    dispatch(handleLoading())
  },
  handleFormOpeningClosing: () => {
    dispatch(handleFormOpeningClosing())
  },
  saveDestinationForm: (destination: Destination) => {
    dispatch(saveDestinationForm(destination))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App as FunctionComponent);