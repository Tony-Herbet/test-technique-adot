import { Destinations } from '../types'
import { SAVE_DESTINATIONS } from './appActionTypes';

// === action creators
export const saveDestinations = (destinations: Destinations) => ({
  type: SAVE_DESTINATIONS,
  destinations,
});

export const handleLoading = () => ({
  type: 'LOADING'
})
