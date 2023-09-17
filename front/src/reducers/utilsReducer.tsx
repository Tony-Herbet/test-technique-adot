import { LOADING } from '../actions/actionTypes';

import { ActionApp, UtilsState } from '../types'

const initialState: UtilsState = {
  loading: true,
};

const utilsReducer = (state = initialState, action: ActionApp = {}) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: !state.loading
      }

    default: return state;
  }
};

export default utilsReducer;