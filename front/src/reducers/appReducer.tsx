import { SAVE_DESTINATIONS, LOADING } from '../actions/appActionTypes';

import { ActionApp, AppState } from '../types'

const initialState: AppState = {
  destinations: [],
  loading: true,
};

const appReducer = (state = initialState, action: ActionApp = {}) => {
  switch (action.type) {
    case SAVE_DESTINATIONS:
      return {
        ...state,
        ...action.destinations,
      };

    case LOADING:
      return {
        ...state,
        loading: !state.loading
      }

    default: return state;
  }
};

export default appReducer;