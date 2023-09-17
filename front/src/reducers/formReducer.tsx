import { HANDLE_FORM_OPENING_CLOSING, SAVE_DESTINATION_FORM } from '../actions/actionTypes';

import { ActionApp, FormState } from '../types'

const initialState: FormState = {
  destinationForm: {},
  isFormOpen: false
};

const formReducer = (state = initialState, action: ActionApp = {}) => {
  switch (action.type) {
    case HANDLE_FORM_OPENING_CLOSING:
      return {
        ...state,
        isFormOpen: !state.isFormOpen
      }

    case SAVE_DESTINATION_FORM:
      return {
        ...state,
        destinationForm: action.destinationForm
      }

    default: return state;
  }
};

export default formReducer;