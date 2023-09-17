import { Destinations } from "."

export interface UtilsState {
  loading: boolean
  isFormOpen: boolean
}

export interface State {
  utils: UtilsState
  destinations: Destinations
}