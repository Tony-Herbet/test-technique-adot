import { LOADING, HANDLE_FORM_STATUS } from '../actions/actionTypes';

import { ActionApp, UtilsState } from '../types'

const initialState: UtilsState = {
  loading: true,
  isFormOpen: false
};

const utilsReducer = (state = initialState, action: ActionApp = {}) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: !state.loading
      }

    case HANDLE_FORM_STATUS:
      return {
        ...state,
        loading: !state.loading
      }

    default: return state;
  }
};

export default utilsReducer;