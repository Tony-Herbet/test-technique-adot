import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import Form  from '../../components/Form';
import { handleFormOpeningClosing, saveDestinationForm, saveDestinations } from '../../actions/actionCreators';
import { FunctionComponent } from 'react';
import { Destination, Destinations, State } from '../../types';

// === mapStateToProps
const mapStateToProps = (state: State) => ({
  destinationForm: state.form.destinationForm,
  destinations: state.destinations.destinations,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  handleFormOpeningClosing: () => {
    dispatch(handleFormOpeningClosing())
  },
  saveDestinationForm: (destination: Destination) => {
    dispatch(saveDestinationForm(destination))
  },
  saveDestinations: (destinations: Destinations) => {
    dispatch(saveDestinations(destinations))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form as FunctionComponent);