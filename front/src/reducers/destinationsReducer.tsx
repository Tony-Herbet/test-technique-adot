import { SAVE_DESTINATIONS } from '../actions/actionTypes';

import { ActionApp, Destinations } from '../types'

const initialState: Destinations = {
  destinations: [],
};

const destinationsReducer = (state = initialState, action: ActionApp = {}) => {
  switch (action.type) {
    case SAVE_DESTINATIONS:
      return {
        ...state,
        ...action.destinations,
      };

    default: return state;
  }
};

export default destinationsReducer;