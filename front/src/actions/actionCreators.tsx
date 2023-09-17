import { Destination, Destinations } from '../types'
import { HANDLE_FORM_OPENING_CLOSING, LOADING, SAVE_DESTINATIONS, SAVE_DESTINATION_FORM } from './actionTypes';

// === action creators
export const saveDestinations = (destinations: Destinations) => ({
  type: SAVE_DESTINATIONS,
  destinations,
});

export const handleLoading = () => ({
  type: LOADING
})

export const handleFormOpeningClosing = () => ({
  type: HANDLE_FORM_OPENING_CLOSING
})

export const saveDestinationForm = (destination: Destination) => ({
  type: SAVE_DESTINATION_FORM,
  destinationForm: destination,
})
