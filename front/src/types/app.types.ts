import { Action, Dispatch } from "redux";
import { Destination, Destinations } from ".";

export interface AppProps {
  destinations: Array<Destination>,
  saveDestinations: (destinations: Destinations) => Dispatch<Action>
  handleLoading: () => Dispatch<Action>
  loading: boolean
}

export interface State {
  app: AppState
}

export interface AppState {
  destinations: Array<Destinations>
  loading: boolean
}