import { Destinations } from '../types'
import { SAVE_DESTINATIONS } from './actionTypes';

// === action creators
export const saveDestinations = (destinations: Destinations) => ({
  type: SAVE_DESTINATIONS,
  destinations,
});

export const handleLoading = () => ({
  type: 'LOADING'
})

export const handleFormStatus = () => ({
  type: 'HANDLE_FORM_STATUS'
})
